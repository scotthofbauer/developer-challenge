import React, { useState } from 'react'
import { Button, LinearProgress} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { mintToken, getRandomProductID } from '../../api/Api';
import { Box } from '@mui/system';
// import { API } from 'aws-amplify';
// import * as queries from '../../graphql/queries';
export interface LandingPageProps {
    address: string | null;
}


const LandingPage: React.FC<LandingPageProps> = ({address}: LandingPageProps) => {
    const [loading, setLoading] = useState<boolean>(false);

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
        colorPrimary: {
            backgroundColor: '#e8eaf6'
          },
        barColorPrimary: {
            backgroundColor: '#03a9f4'
        }
    }));
    

    const classes = useStyles();

    // function myFunction() {
    //     setTimeout(function(){ console.log("Token Minted"); }, 3000);
    // }

    const handleClick = async () => {
        if(address){
            // setLoading(true);
            const tokenResult = await mintToken(address);
            console.log("tokenResult")
            // myFunction()
            console.log("finished minting");
            // setLoading(false);

        }
    }
    const toggleLoading = () => {
        console.log("toggleLoading called")
        setLoading(!loading);
    }
    console.log("loading: ", loading)
    return (
        <div>
            {loading && (
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
            <div className={classes.root}>
                <div className={classes.container}>
                    <h1 className={classes.text}> Welcome to Hoff Industries NFTs</h1>
                    <Button
                    variant='contained'
                    color='error'
                    onClick={async () => {
                        toggleLoading()
                        await handleClick()
                        toggleLoading()
                    }}
                    disabled={address ? false : true}
                >
                    {address? "Mint" : "Connect"}

                </Button>
                </div>
            </div>
        </div>
    )
}

export default LandingPage