import { Button, Card, CardActions, CardContent, CardHeader, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";


const useStyles = makeStyles((theme) => ({
    root: {
        // outline: '1px solid white',
        height: '100vh',
        alignItems: 'center'
    },
    title: {
        color: 'white',
    }
  }));

const Info = () => {
    const classes = useStyles();
    return (
        <Grid container className={classes.root}>

            <Grid container spacing={5}>
                
                <Grid item xs={0} sm={1}></Grid>
                <Grid item xs={10} className={classes.title}>
                    <h1>A world-first decentralised platform for developers and NFT owners.
                    Create, Train and Own Non-Fungible Intelligence (NFI).</h1>
                </Grid>
                <Grid item xs={0} sm={1}></Grid>

                <Grid item xs={0} sm={1}></Grid>
                <Grid item xs={12} sm={5}>
                    <Card>
                        <CardHeader>
                        <h3>Card Header</h3>
                        </CardHeader>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                How Nike NFTs work
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                            nisi ut aliquip ex ea commodo consequat.                  
                            </Typography>
                        </CardContent>
                        <CardActions>
                        <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={5}>
                    <Card>
                        <CardHeader>
                        <h3>Card Header</h3>
                        </CardHeader>
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            How Nike NFTs work
                        </Typography>
                            <Typography variant="body2" color="text.secondary">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                            nisi ut aliquip ex ea commodo consequat.                  
                            </Typography>
                        </CardContent>
                        <CardActions>
                        <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={0} sm={1}></Grid>





            </Grid>
        </Grid>      
    )

}

export default Info