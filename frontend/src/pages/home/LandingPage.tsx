import React, { useState } from 'react'
import { Button, CircularProgress, LinearProgress} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { mintToken,
        // getRandomProductID, 
        // getOwner, 
        // getTotalSupply
        } 
from '../../api/Api';
import { Box } from '@mui/system';
import AlertSnackBar from '../../shared/AlertSnackBar';
// import { API } from 'aws-amplify';
// import * as queries from '../../graphql/queries';
export interface LandingPageProps {
    address: string | null;
}


const LandingPage: React.FC<LandingPageProps> = ({address}: LandingPageProps) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [snackBar, setSnackBar] = useState<boolean>(false);
    const [success, setSuccess] = useState<boolean>(false);

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
        wrapper: {
            position: "relative"
        },
        text: {
            fontSize: '2rem',
            color:'white'
        },
        arrow: {
            color: 'white',
            fontSize: '4rem',
        },
        colorPrimary: {
            backgroundColor: '#e8eaf6'
          },
        barColorPrimary: {
            backgroundColor: '#03a9f4'
        }
    }));
    


    const classes = useStyles();

    const handleClick = async () => {
        if(address) {

            let result;
            try{
                setIsLoading(true);
                result = await mintToken(address);
                // result = await getTotalSupply("0xb8c4717638b27b0c85f0f2996187c1079d655622");
                console.log("result: ", result);

            }catch(error) {
                console.log("error minting token: ", error);
            }finally {
                if(result && result.headers.type === 'TransactionSuccess'){
                // if(false){
                    setSuccess(true);
                }else {
                    setSuccess(false);
                }
                setSnackBar(true);
                setIsLoading(false);
            }
        }
    }

    const closeSnackBar = () => setSnackBar(false);
    
    console.log("loading: ", isLoading)
    return (
        <div>
            {isLoading && (
                <Box sx={{ width: '100%' }}>
                        <LinearProgress
                        classes={{
                            colorPrimary: classes.colorPrimary,
                            barColorPrimary: classes.barColorPrimary
                        }}
                        />
                    </Box>
                )
            }
            {snackBar && (
                <AlertSnackBar 
                    closeSnackBar={closeSnackBar} 
                    success={success} 
                    message={success ? "NFT successfully Minted" : "Error minting NFT"}
                />
            )
            }

            <div className={classes.root}>
                <div className={classes.container}>
                    <h1 className={classes.text}> Welcome to Hoff Industries NFTs</h1>
                        <div className={classes.wrapper}>
                            <Button
                                variant='contained'
                                color='error'
                                onClick={async () => {
                                    // toggleLoading(true);
                                    await handleClick();
                                    // toggleLoading(false);
                                    
                                }}
                                disabled={isLoading}
                            >
                            {address? "Mint" : "Connect"}
                            </Button>
                            {isLoading && (
                                <CircularProgress />
                            )}                    
                        </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage