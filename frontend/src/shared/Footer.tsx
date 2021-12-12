import { Grid, Link, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '30vh',
        display: 'flex',
        justifyContent: "center",
        alignItems: 'center',
        textAlign: 'center',
    },
    header: {
        color: '#ffffff'
    }

}));

const Footer = () => {
    const classes = useStyles();
    return (
        <Grid container className={classes.root} spacing={2} >
            <Grid item xs={12}>
                    <Typography variant="h5" color='#ffffff' className={classes.header}>
                        Hoff Industries
                    </Typography>
                    <Typography variant="subtitle1" color='#ffffff' className={classes.header}>
                        @2021 All right reserved
                    </Typography>
            </Grid>
            <Grid item>
                <Link
                    component="button"
                    variant="button"
                    color='#ffffff'
                    underline='hover'
                    onClick={() => {
                        console.log("Accounts Link");
                    }}                 
                >
                    Help
                </Link>
            </Grid>
            <Grid item>
                <Link
                    component="button"
                    variant="button"
                    color='#ffffff'
                    underline='hover'
                    onClick={() => {
                        console.log("Accounts Link");
                    }}                 
                >
                    Contact
                </Link>
            </Grid>
            <Grid item>
                <Link
                    component="button"
                    variant="button"
                    color='#ffffff'
                    underline='hover'
                    onClick={() => {
                        console.log("Accounts Link");
                    }}                 
                >
                    Privacy
                </Link>
            </Grid>
        </Grid>
    )
}

export default Footer