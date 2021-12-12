import { Box, Grid, LinearProgress } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useEffect, useState } from 'react';
import Header from '../../shared/Header';
import NFTCard from './NFTCard';
import { API, graphqlOperation } from 'aws-amplify'
import * as queries from '../../graphql/queries';
import { Token } from '../../API';
import NFTModal from './NFTModal';
import AlertSnackBar from '../../shared/AlertSnackBar';


interface MarketPlaceProps {
    address: string | null
}

const useStyles = makeStyles(() => ({
    root: {
        minHeight: '100vh',
    //   backgroundColor: '#94B9AF',
        backgroundImage: 'linear-gradient(315deg, #A23F7D 0%, #8435ac 100%)'

    },
    hr: {
      width: '75%'
    },
    grid: {
        padding: '10px'
    },
    colorPrimary: {
        backgroundColor: '#e8eaf6'
      },
    barColorPrimary: {
        backgroundColor: '#03a9f4'
    }
  }));



const MarketPlace: React.FC<MarketPlaceProps> = ({address}) => {
    const classes = useStyles();
    const [data, setData] = useState<Array<Token>>([]);
    const [open, setOpen] = useState<boolean>(false);
    const [selectedNFT, setSelectedNFT] = useState<Token>();
    const [sell, setSell] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [snackBar, setSnackBar] = useState<boolean>(false);
    const [success, setSuccess] = useState<boolean>(false);


    useEffect(() => {
         getTokenData();
    }, [])

    const getTokenData = async () => {
        try {
            setIsLoading(true);
            const tokens = (await API.graphql(graphqlOperation(queries.listTokens)) as any);
            setData(tokens.data.listTokens.items);
        }catch(error) {
            console.log('error fetching tokens');
        }finally{
            setIsLoading(false);
        }
    }
    const handleModal = () => setOpen(!open);

    const closeModalRefresh = (success: boolean) => {
        setSuccess(success);
        setSnackBar(true);
        handleModal();
        getTokenData();
    }

    const closeSnackBar = () => setSnackBar(false);

    const getMessage = () => {
        if(success) {
            if(sell) {
                return 'Successful sale of NFT'
            }else{
                return 'Successfully redeemed NFT'
            }
        }else {
            if(sell) {
                return 'Error occurred during sale of NFT'
            }else {
                return 'Error redeeming NFT'
            }
        }
    }

    console.log("snackbar: ", open);
    return (     
            <div className={classes.root} >
                        <Header address={address} />
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
                                message={getMessage()}
                            />
                        )
                        }
                        {(data.length > 0 && !isLoading) ? (
                            <div >
                                <Grid container spacing={4} className={classes.grid}>
                                    {data.map((token) => (                              
                                        <Grid key={token.id} item xs={12} sm={4} >
                                            <NFTCard key={token.id} token={token} handleModal={handleModal} setSelectedNFT={setSelectedNFT} setSell={setSell} />
                                        </Grid>
                                    ))}  
                                </Grid>
                                {open ? <NFTModal 
                                            open={open}
                                            handleModal={handleModal} 
                                            token={selectedNFT} 
                                            sell={sell}
                                            address={address}
                                            closeModalRefresh={closeModalRefresh}
                                        /> : null}
                            </div>
                        ) : (
                            <div>
                                <h1>No NFTs Minted </h1>
                            </div>
                        )  
                    }
            
            </div>
    )
}



export default MarketPlace;