import React from 'react'
import { Button} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { mintToken, getRandomProductID } from '../../api/Api';
// import { API } from 'aws-amplify';
// import * as queries from '../../graphql/queries';
export interface LandingPageProps {
    address: string | null;
}


const LandingPage: React.FC<LandingPageProps> = ({address}: LandingPageProps) => {
    

    const useStyles = makeStyles(() => ({
        root: {
            display: 'flex',
            justifyContent: "center",
            alignItems: 'center',
            height: '100vh',
            textAlign: 'center',
        }, 
        container: {
            diplsay: 'flex',
            alignItems: 'center',
        },
        text: {
            fontSize: '2rem',
            color:'white'
        },
        arrow: {
            color: 'white',
            fontSize: '4rem',
        },       
    }));
    

    const classes = useStyles();

    const handleClick = async () => {
        if(address){
            const tokenResult = await mintToken(address);
            console.log('tokenResult: ', tokenResult);
        }
    }

    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <h1 className={classes.text}> Welcome to Hoff Industries NFTs</h1>
                <Button
                variant='contained'
                color='error'
                onClick={handleClick}
                disabled={address ? false : true}
            >
                {address? "Mint" : "Connect"}

            </Button>
            </div>
        </div>
    )
}

export default LandingPage