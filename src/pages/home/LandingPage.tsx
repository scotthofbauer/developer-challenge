import React, { useState } from 'react'
import { Button, Card, CardContent, CardMedia, CircularProgress, Grid, LinearProgress, Theme, Typography} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { mintToken} 
from '../../api/Api';
import { Box } from '@mui/system';
import AlertSnackBar from '../../shared/AlertSnackBar';
import { Token } from '../../API';
export interface LandingPageProps {
    address: string | null;
}

const exampleToken: Token = {
    id: "123",
    product: {
        id: '123',
        owner: '0x12345678901234567899212345',
        img: 'https://developerchallenges3nft212305-dev.s3.us-east-2.amazonaws.com/shoe4.png',
        name: 'Air Jordan 4s',
        brand: 'Hoff Industries',
        year: '2021',
        minted: false,
        redeemed: false,
        __typename: 'Product',
        createdAt: 'now',
        updatedAt: 'now'
    },
    __typename: 'Token',
    createdAt: '',
    updatedAt: ''
}


const useStyles = makeStyles((theme: Theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        textAlign: 'center',
    }, 
    container: {
        diplsay: 'flex',
        alignItems: 'center',
    },
    card: {
        height: '55%',
        alignItems: 'center',
        background: theme.palette.primary.dark,
    },
    wrapper: {
        position: 'relative'
    },
    text: {
        fontSize: '2rem',
        color: theme.palette.primary.light
    },
    title: {
        fontWeight: 'bold',
        color: theme.palette.primary.light
        
    },
    subtitle: {
        color: theme.palette.primary.dark
    },
    colorPrimary: {
        backgroundColor: theme.palette.success.main
    },
    barColorPrimary: {
        backgroundColor: theme.palette.primary.dark
    },
    cardContent: {
        background: theme.palette.primary.dark
    }

}));




const LandingPage: React.FC<LandingPageProps> = ({address}: LandingPageProps) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [snackBar, setSnackBar] = useState<boolean>(false);
    const [success, setSuccess] = useState<boolean>(false);
    const [defaultToken, setDefaultToken] = useState<Token>(exampleToken);
    const classes = useStyles();
    const closeSnackBar = () => setSnackBar(false);


    const handleClick = async () => {
        if(address) {
            let result;
            try{
                setIsLoading(true);
                result = await mintToken(address);
                console.log("result: ", result);

            }catch(error) {
                console.log("error minting token: ", error);
            }finally {
                if(result){
                    setSuccess(true);
                    setDefaultToken(result.data.createToken);
                }else {
                    setSuccess(false);
                }
                setSnackBar(true);
                setIsLoading(false);
            }
        }
    }


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
            )}

            <div className={classes.root}>
                <div className={classes.container}>
                    <Grid container spacing={5}>
                        <Grid item xs={12} sm={6}>
                            <Typography 
                                variant="h1" 
                                component="div" 
                                className={classes.title}
                            >
                                Welcome to Hoff Industries NFTs
                            </Typography>
                            <Typography variant="h4" component="div" className={classes.subtitle}>
                                Begin minting some NFTS
                            </Typography>
                            <div className={classes.wrapper}>
                                <Button
                                    size='large'
                                    variant='contained'
                                    onClick={async () => {
                                        await handleClick();                                    
                                    }}
                                    disabled={isLoading}
                                    sx={{background: '#252323', color: '#FCF7F8', marginTop: '50px'}}
                                >
                                {address ? "Mint" : "Connect"}
                                {isLoading && (
                                    <CircularProgress />
                                )}                    
                                </Button>
                            </div>
                        </Grid>
                        <Grid item xs={1} sm={1}></Grid>
                        {isLoading ? (
                            <CircularProgress />
                        ) : (
                            <Grid item xs={0} sm={3}>
                                <Box display={{ xs: "none", sm: "block"}} sx={{background: "#252323"}}>
                                    <Card className={classes.card}>
                                        <div>
                                            <CardMedia
                                                component="img"
                                                alt="NFT Shoe Image"
                                                image={defaultToken?.product?.img}
                                                sx={{background: "#252323"}}

                                            />
                                        </div>
                                        <CardContent className={classes.cardContent}>
                                            <Typography variant="h5" component="div" className={classes.text}>
                                            {exampleToken?.product?.name}
                                            </Typography>
                                            <Typography gutterBottom variant="h6" className={classes.text}>
                                            Year: {defaultToken?.product?.year}
                                            </Typography>
                                            <Typography gutterBottom variant="body2" className={classes.text}>
                                            Owner: {defaultToken?.product?.owner}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Box>

                            </Grid>
                        )}    

                    </Grid>
                </div>
            </div>
        </div>
    )
}

export default LandingPage