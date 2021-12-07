import axios from 'axios';

const contractUrl = "https://u0rymjyyct-u0fj2prbvx-connect.us0-aws.kaleido.io/instances/0xecfccb323d855a803e374962aa203a12934b7c7b"
const contractInstance = axios.create({
    baseURL: contractUrl,
    timeout: 1000,
    headers: {'Authorization': 'Basic dTBiMHYxZm5jdTpKS1Y5MzZUc0xTcXRnZFREVEdZOGZtWGNrV0xJZkNjemZiMkNQMFJvUDdz'}
});

const consortiaInstance = axios.create({
    baseURL: process.env.REACT_APP_KALIEDO_BASE_URL,
    timeout: 1000,
    headers: {'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`}
});


export const getTotalSupply  = async (address: string) => {
    try{
        const res = await contractInstance.get('/totalSupply', {
            params: {
                'kld-from': address
            }
        });
        return res.data;
    }catch (error: any){
        console.log("error: ", error);
    }
}

