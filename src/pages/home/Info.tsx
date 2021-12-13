import { Button, Card, CardActions, CardContent, Grid, Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";


const useStyles = makeStyles((theme: Theme) => ({
    root: {
        height: '100vh',
        alignItems: 'center'
    },
    title: {
        color: `${theme.palette.primary.light}`,
    },
    card: {
        background: `${theme.palette.primary.dark}`
    },
    text: {
        background: `${theme.palette.primary.dark}`,
        color: `${theme.palette.primary.light}`
    },
    button: {
        background: `${theme.palette.primary.dark}`,
        color: `${theme.palette.primary.light}`
    }
  }));

const Info = () => {
    const classes = useStyles();
    return (
        <Grid container className={classes.root}>
            <Grid container spacing={5}>
                <Grid item xs={0} sm={1}></Grid>
                <Grid item xs={10} className={classes.title}>
                    <h1>A world-first decentralized platform for consumers to purchase NFTs that allow ability to redeem product or sell right to ownership.</h1>
                </Grid>
                <Grid item xs={0} sm={1}></Grid>

                <Grid item xs={0} sm={1}></Grid>
                <Grid item xs={12} sm={5}>
                    <Card>
                        <CardContent className={classes.card}>
                        <Typography gutterBottom variant="h5" component="div" className={classes.text}>
                            How Hoff Industries NFTs work
                        </Typography>
                            <Typography variant="body2" className={classes.text}>
                               Supported through the Kaleido Blockchain platform. By connecting your MetaMask account,
                               a Consumer is able to purchase the ownership rights to an exclusive Hoff Industry NFT.
                               By owning this NFT it gives the ability to resell the ownership rights or redeem the 
                               NFT in order to recieve the product. Note all NFTs contain an expiration date that will
                               require owners to redeem by that date.               
                            </Typography>
                        </CardContent>
                        <CardActions className={classes.button}>
                            <Button 
                                size="small" 
                                variant='text'
                                sx={{background: '#252323', color: '#FCF7F8'}}
                            >
                                Learn More
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={5}>
                    <Card>
                        <CardContent className={classes.card}>
                        <Typography gutterBottom variant="h5" component="div" className={classes.text}>
                            How to Sell or Redeem
                        </Typography>
                            <Typography variant="body2" className={classes.text}>
                                Ownership of an NFT will be indicated by a star icon along with the owner's address displayed
                                on the NFT Card. To sell an NFT, first input the address of the individual that will assume ownership
                                of the NFT next, insert your personal HD Wallet ID. To Redeem, insert your personal Wallet ID and Hoff
                                industries will ship you your product.                  
                            </Typography>
                        </CardContent>
                        <CardActions className={classes.button}>
                            <Button 
                                size="small" 
                                variant='text'
                                sx={{background: '#252323', color: '#FCF7F8'}}
                            >
                                Learn More
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={0} sm={1}></Grid>
            </Grid>
        </Grid>      
    )

}

export default Info