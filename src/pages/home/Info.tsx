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
                    <h1>A world-first decentralised platform for consumers to purchase NFTs that allow ability to the ability to redeem product or sell right to ownership.</h1>
                </Grid>
                <Grid item xs={0} sm={1}></Grid>

                <Grid item xs={0} sm={1}></Grid>
                <Grid item xs={12} sm={5}>
                    <Card>
                        <CardContent className={classes.card}>
                        <Typography gutterBottom variant="h5" component="div" className={classes.text}>
                            How Nike NFTs work
                        </Typography>
                            <Typography variant="body2" className={classes.text}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                                nisi ut aliquip ex ea commodo consequat.                  
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
                            How Nike NFTs work
                        </Typography>
                            <Typography variant="body2" className={classes.text}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                                nisi ut aliquip ex ea commodo consequat.                  
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