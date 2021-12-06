import { Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        color: '#000000'
    },

}));

const Footer = () => {
    const classes = useStyles();
    return (
        <Grid container >
            <Grid item xs={12}>
                <footer className={classes.root}>
                    <Typography variant="h5" component="h3" >
                        React App with Material UI
                    </Typography>
                    <Typography component="p">
                    @2018 All right reserved
                    </Typography>
                </footer>
            </Grid>
        </Grid>
    )
}

export default Footer