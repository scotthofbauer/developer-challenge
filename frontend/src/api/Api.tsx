import { API } from '@aws-amplify/api';
import { graphqlOperation } from 'aws-amplify';
import axios from 'axios';
import * as mutations from '../graphql/mutations';
import * as queries from '../graphql/queries';
import config from '../config.json';
import { Product, UpdateProductInput } from '../API';

const contractUrl = "https://u0rymjyyct-u0fj2prbvx-connect.us0-aws.kaleido.io/instances/0xecfccb323d855a803e374962aa203a12934b7c7b"
const contractInstance = axios.create({
    baseURL: contractUrl,
    timeout: 30000,
    headers: {'Authorization': 'Basic dTBiMHYxZm5jdTpKS1Y5MzZUc0xTcXRnZFREVEdZOGZtWGNrV0xJZkNjemZiMkNQMFJvUDdz'}
});

// const consortiaInstance = axios.create({
//     baseURL: process.env.REACT_APP_KALIEDO_BASE_URL,
//     timeout: 1000,
//     headers: {'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`}
// });


export const getTotalSupply  = async (address: string) => {
    try{
        const res = await contractInstance.get('/totalSupply', {
            params: {
                'kld-from': `${address}`
            }
        });
        return res.data;
    }catch (error: any){
        console.log("error getting supply: ", error);
    }
}

export const mintToken = async (address: string) => {
    try{
        console.log("Minting")
        const productId = await getRandomProductID();
        const newTokenId = Math.floor(Math.random() * 20000000);
        if(productId && newTokenId){
            const res = await contractInstance.post('/mint', 
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
            if(res.data.headers.type === 'TransactionSuccess') {
            
                console.log("Transaction Success!");
                //Insert New Token to GraphQL
                const newTokenDetails = {
                    id: newTokenId.toString(),
                    owner: `${address}`,
                    contractTokensId: `${config.CONTRACT_ADDRESS}`,
                    tokenProductId: productId.toString(),
                };
                const newTokenResult = (await API.graphql(graphqlOperation(mutations.createToken, {input: newTokenDetails})) as any);
                console.log("newTokenResult: ", newTokenResult);
    
                //Update Product to link to new Token
                const updateProductDetails: UpdateProductInput = {
                    id: productId.toString(),
                    productTokenId: newTokenId.toString(),
                    minted: true
                }
                console.log("updateProductDetails", updateProductDetails);
                const updateProductDetailsResult = (await API.graphql(graphqlOperation(mutations.updateProduct, {input: updateProductDetails})) as any);
                console.log("updatedProductResult: ", updateProductDetailsResult)
            }

        }
        return "it worked"
    }catch(error: any) {
        console.log("error minting: ", error);
    }
}

export const getRandomProductID = async () => {
    try{
        let filter = {
            minted: {
                eq: false
            }
        };
        const availableProducts = (await API.graphql(graphqlOperation(queries.listProducts, {filter: filter})) as any);
        const items = availableProducts.data.listProducts.items;
        let ids:String[] = [];
        items.forEach((item:Product) =>  {
            ids.push(item.id);
        })
        const randomIndex = Math.floor(Math.random() * ids.length);
        const selectedId = ids[randomIndex];
        console.log(selectedId);
        console.log(ids);
        return selectedId
    }catch(error: any) {
        console.log("error getting avaliable products");
    }
}


