import { Box, Grid, Modal, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useEffect, useState } from 'react';
import Header from '../../shared/Header';
import NFTCard from './NFTCard';
import { API, graphqlOperation } from 'aws-amplify'
import * as queries from '../../graphql/queries';
import { Token } from '../../API';
import NFTModal from './NFTModal';


interface MarketPlaceProps {
    address: string | null
}

const useStyles = makeStyles(() => ({
    root: {
      minHeight: '100vh',
      backgroundColor: '#000000',
      backgroundImage: 'linear-gradient(315deg, #000000 0%, #7f8c8d 74%)'
    },
    hr: {
      width: '75%'
    },
    grid: {
        padding: '10px'
    }
  }));



const MarketPlace: React.FC<MarketPlaceProps> = ({address}) => {
    const classes = useStyles();
    const [data, setData] = useState<Array<Token>>([]);
    const [open, setOpen] = useState<boolean>(false);
    const [selectedNFT, setSelectedNFT] = useState<Token>();
    const [sell, setSell] = useState<boolean>(false);


    useEffect(() => {
        getTokenData();
    }, [])

    const getTokenData = async () => {
        try {
            const tokens = (await API.graphql(graphqlOperation(queries.listTokens)) as any);
            setData(tokens.data.listTokens.items);
        }catch(error) {
            console.log('error fetching tokens');
        }
    }
    const handleModal = () => setOpen(!open);

    console.log("open: ", open);
    return (
             <div > 
                {data.length > 0 ? (
                    <div className={classes.root}>
                        <Header address={address} />
                        <Grid container spacing={4} className={classes.grid}>
                            {data.map((token) => (                              
                                <Grid key={token.id} item xs={12} sm={4}>
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
                                /> : null}
            </div>
            ) : (
                <div className={classes.root}>
                    <Header address={"test"} />
                    <h1>No NFTs have been minted</h1>
                </div>
            )
            }
            
        </div>
    )
}



export default MarketPlace;