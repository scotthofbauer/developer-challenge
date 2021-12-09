import { API } from '@aws-amplify/api';
import { graphqlOperation } from 'aws-amplify';
import axios from 'axios';
import * as mutations from '../graphql/mutations';

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
        const totalSupplyResponse = await getTotalSupply(address);
        let tokenCount = parseInt(totalSupplyResponse.output);
        let nextTokenId = tokenCount+1;
        const res = await contractInstance.post('/mint', 
        {
            'to': `${address}`,
            'tokenId': "14"
        },
        {
            params: {
                'kld-from': '0xb8c4717638b27b0c85f0f2996187c1079d655622',
                'kld-sync': true
            },

        });
        if(res.data.headers.type === 'TransactionSuccess') {
            console.log("Transaction Success!");
            //Insert New Token to GraphQL
            const newTokenDetails = {
                id: "2",
                content: "Second NFT",
                contractTokensId: "0xecfccb323d855a803e374962aa203a12934b7c7b",
                tokenProductId: "2",
            };
            const newTokenResult = (await API.graphql(graphqlOperation(mutations.createToken, {input: newTokenDetails})) as any);
            console.log("newTokenResult: ", newTokenResult);

            //Update Product to link to new Token
            const updateProductDetails = {
                id:"2",
                productTokenId:"2"
            }
            const updateProductDetailsResult = (await API.graphql(graphqlOperation(mutations.updateProduct, {input: updateProductDetails})) as any);
            console.log("newTokenResult: ", updateProductDetailsResult)

        }
        return res.data
    }catch(error: any) {
        console.log("error minting: ", error);
    }
}


