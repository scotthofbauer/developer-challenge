import { API } from '@aws-amplify/api';
import { graphqlOperation } from 'aws-amplify';
import axios from 'axios';
import * as mutations from '../graphql/mutations';
import * as queries from '../graphql/queries';
// import config from '../config.json';
import config from '../config.json';
import { DeleteTokenInput, DeleteTokenMutation, Product, Token, UpdateProductInput, UpdateProductMutation } from '../API';
import { MintTokenKaliedoResponse } from './Models';

const contractUrl = `${config.KALEIDO_REST_GATEWAY_URL}/instances/${config.CONTRACT_ADDRESS}`
const contractInstance = axios.create({
    baseURL: contractUrl,
    timeout: 30000,
    headers: {'Authorization': `${config.BASIC_AUTH}`}
});
const expirationDate = "12/13/2022";

export const mintToken = async (address: string) => {
    try{
        //Gets Random productID of available NFTs
        const productId = await getRandomProductID();
        //Generates a random TokenID
        const newTokenId = Math.floor(Math.random() * 20000000);
        //Checks that there's an available NFT and tokenID
        if(productId && newTokenId){
            const res:MintTokenKaliedoResponse = await contractInstance.post('/mint', 
            {
                'to': `${address}`,
                'tokenId': newTokenId.toString()
            },
            {
                params: {
                    'kld-from': `${config.MINTER_ADDRESS}`,
                    'kld-sync': true
                },

            });
            //If Kaleido transaction is successful then execute DynamoDB updates
            if(res.data.headers.type === 'TransactionSuccess') {
                //Insert New Token to GraphQL
                const newTokenDetails = {
                    id: newTokenId.toString(),
                    contractTokensId: `${config.CONTRACT_ADDRESS}`,
                    tokenProductId: productId.toString(),
                    expiration: expirationDate

                };
                //Create Token on DynamoDB
                let newTokenResult = (await API.graphql(graphqlOperation(mutations.createToken, {input: newTokenDetails})) as any);
                //Update Product to link to new Token
                const updateProductDetails: UpdateProductInput = {
                    id: productId.toString(),
                    productTokenId: newTokenId.toString(),
                    minted: true,
                    owner: `${address}`,
                }
                const updateProductDetailsResult = (await API.graphql(graphqlOperation(mutations.updateProduct, {input: updateProductDetails})) as any);
                //Work Around because newTokenResult doesn't have the owner, 
                //that is returned on updateProduct response. This is for UI purposes
                newTokenResult.data.createToken.product.owner = updateProductDetailsResult.data.updateProduct.owner;
                return newTokenResult;
            }
            return null;
        }
    }catch(error: any) {
        throw new Error(error);
    }
}



export const burnToken = async (address: string, walletID: string, token: Token) => {
    try {
        //checks to make sure the address trying to burn a token owns the token and token is associated with a product
        const checkOwnerResult = await getOwner(token);
        if(checkOwnerResult === address && token.product){
            console.log("kld-from: ", `HD-${config.HD_WALLET_RUNTIME}-${walletID}-0`);
            const res = await contractInstance.post('/burn', 
            {
                'tokenId': `${token.id}`
            },
            {
                // HD-runtimeID-walletID-index
                params: {
                    'kld-from': `HD-${config.HD_WALLET_RUNTIME}-${walletID}-0`,
                    'kld-sync': true
                },
            });
            if(res.data.headers.type === 'TransactionSuccess' ) {
                //Update Product to link to new Token
                const updateProductDetails: UpdateProductInput = {
                    id: token.product.id.toString(),
                    productTokenId: "",
                    minted: true,
                    owner: "",
                    redeemed: true
                }
                const deleteTokenDetails: DeleteTokenInput = {
                    id: token.id
                };
                (await API.graphql(graphqlOperation(mutations.updateProduct, {input: updateProductDetails})) as UpdateProductMutation);
                (await API.graphql(graphqlOperation(mutations.deleteToken, {input: deleteTokenDetails})) as DeleteTokenMutation);
                return res.data
            }
        }
    } catch (error: any) {
        throw new Error(error);
    }
}

export const transferToken = async (addressFrom: string, addressTo: string, walletID: string, token: Token) => {
    try {
        //checks to make sure the address trying to burn a token owns the token
        const checkOwnerResult = await getOwner(token);
        console.log("kld-from: ", `HD-${config.HD_WALLET_RUNTIME}-${walletID}-0`);
        if(checkOwnerResult === addressFrom && token.product){
            const res = await contractInstance.post('/transferFrom', 
            {
                from: `${addressFrom}`,
                to: `${addressTo}`,
                tokenId: `${token.id}`        
            },
            {
                // HD-runtimeID-walletID-index
                params: {
                    'kld-from': `HD-${config.HD_WALLET_RUNTIME}-${walletID}-0`,
                    'kld-sync': true
                },
            });
            if(res.data.headers.type === 'TransactionSuccess' ) {
                //Update Product to link to new Token
                const updateProductDetails: UpdateProductInput = {
                    id: token.product.id.toString(),
                    owner: addressTo
                }

                console.log("updateProductDetails", updateProductDetails);
                (await API.graphql(graphqlOperation(mutations.updateProduct, {input: updateProductDetails})) as UpdateProductMutation);
                return res.data;
            }
        }
    } catch (error: any) {
        throw new Error(error);
    }
}

export const getOwner = async (token: Token) => {
    try {
        const res = await contractInstance.get('/ownerOf', 
        {
            params: {
                'tokenId': `${token.id}`,
                'kld-from': `${config.MINTER_ADDRESS}`,
            },
        });
        return res.data.output;

    } catch (error: any) {
        throw new Error(error);
    }
}


export const getRandomProductID = async () => {
    //pulls products that haven't been minted or redeemed
    try{
        let filter = {
            minted: {
                eq: false
            },
            redeemed: {
                eq: false
            }

        };
        //Get available products to Mint
        const availableProducts = (await API.graphql(graphqlOperation(queries.listProducts, {filter: filter})) as any);
        const items = availableProducts.data.listProducts.items;
        let ids:String[] = [];
        items.forEach((item:Product) =>  {
            ids.push(item.id);
        })
        //Random Index
        const randomIndex = Math.floor(Math.random() * ids.length);
        const selectedId = ids[randomIndex];
        return selectedId
    }catch(error: any) {
        throw new Error(error);
    }
}