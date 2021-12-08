import React, { useEffect, useState } from 'react';
import { makeStyles } from '@mui/styles';
import Info from './Info';
import { Grid } from '@mui/material';
import Footer from '../../shared/Footer';
import Header from '../../shared/Header';
import LandingPage from './LandingPage';

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



const Home = () => {
  const classes = useStyles();
  const [defaultAccount, setDefaultAccount] = useState(null);
  useEffect(() => {
      if(window.ethereum) {
          window.ethereum.request({method: 'eth_requestAccounts'}).then((result:any) => {
            accountChangedHandler(result[0])

        })
      }else {
          window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
      }
  }, []) 

    const accountChangedHandler = (newAccount:any) => {
        setDefaultAccount(newAccount);
    }

  return(
      <div className={classes.root}>
        <Header address={defaultAccount} />
        <Grid container>
          <Grid item xs={12}> <LandingPage address={defaultAccount}/> </Grid>
          <Grid item xs={12}> 
            <hr className={classes.hr} />
          </Grid>
          <Grid item xs={12}> <Info /></Grid>
          <Grid item xs={12}> 
            <hr className={classes.hr} />
          </Grid>
          <Grid item xs={12}> <Footer /></Grid>
        </Grid>         
      </div>
  )
}

export default Home;