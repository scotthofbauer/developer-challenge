import React from 'react';
import { makeStyles } from '@mui/styles';
import Info from './Info';
import { Grid, Theme } from '@mui/material';
import Footer from '../../shared/Footer';
import Header from '../../shared/Header';
import LandingPage from './LandingPage';

interface HomeProps {
  address: string | null
}


const useStyles = makeStyles((theme: Theme) => ({
    root: {
      minHeight: '100vh',
      backgroundColor: theme.palette.primary.main,
    },
    hr: {
      width: '75%'
    } 
  }));



const Home: React.FC<HomeProps> = ({address}) => {
  const classes = useStyles();
  

  return(
      <div className={classes.root}>
        <Header address={address} />
        <Grid container>
          <Grid item xs={12}> 
            <LandingPage address={address}/> 
          </Grid>
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