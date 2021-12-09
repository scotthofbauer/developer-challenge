import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useEffect, useState } from 'react';
import Header from '../../shared/Header';
import NFTCard from './NFTCard';
import { API, graphqlOperation } from 'aws-amplify'
import * as queries from '../../graphql/queries';
import { Token } from '../../API';


const useStyles = makeStyles((theme) => ({
    root: {
      minHeight: '100vh',
      backgroundColor: '#000000',
      backgroundImage: 'linear-gradient(315deg, #000000 0%, #7f8c8d 74%)'
    },
    hr: {
      width: '75%'
    } 
  }));



const MarketPlace = () => {
    const classes = useStyles();
    const [data, setData] = useState<Array<Token>>([]);

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

    console.log('data: ', data);
    return (
        <div > 
            {data.length > 0 ? (
                <div className={classes.root}>
                    <Header address={"test"} />
                    <Grid container spacing={4}>
                        <Grid item xs={1}></Grid>
                        {data.map((token) => (                              
                            <Grid item xs={12} sm={4}>
                                <NFTCard key={token.id} token={token}/>
                            </Grid>
                        ))}  
                        <Grid item xs={1}></Grid>
                    </Grid>
                </div>
            ) : null
            }
            
        </div>
    )
}



export default MarketPlace;