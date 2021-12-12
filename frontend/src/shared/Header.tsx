import React from 'react';
import { AppBar, Grid, Link, Theme, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useNavigate } from "react-router-dom";

export interface HeaderProps {
    address: string | null;
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
    //    display: 'flex',
    //    flexFlow: 'row wrap',
    //    justifyContent: 'space-around',
    //    listStyle: 'none',
        background: `${theme.palette.primary.dark}`,
    },
    title: {
        flexGrow: 1, 
    },
    gridContainer: {
        margin: '20px'
    }

    // appbarTitle: {
    //     flexGrow: 1,       
    // },
    // links: {
    //     padding: '10px'
    // }
}));



const Header: React.FC<HeaderProps> = ({address}: HeaderProps) => {
    const classes = useStyles();
    const navigate = useNavigate();

    return (
        <div className={classes.root} >
            <AppBar 
                position="sticky"
                color="transparent">
                <Grid container className={classes.gridContainer}>
                    <Grid item xs={12} sm={7.3} >
                        <Link
                            component="button"
                            variant="button"
                            color='#f3e0ec'
                            underline='hover'
                            onClick={() => {
                                navigate('/');
                            }}                 
                                       
                        >
                            Hoff Industries NFT Market
                        </Link>
                    </Grid>
                    <Grid item xs={12} sm={0.5}>
                        <Link
                            component="button"
                            variant="button"
                            color='#ffffff'
                            underline='hover'
                            onClick={() => {
                                navigate('/');
                            }}                            
                        >
                            Home
                        </Link>

                    </Grid>
                    <Grid item xs={12} sm={1}>
                        <Link
                            component="button"
                            variant="button"
                            color='#ffffff'
                            underline='hover'
                            onClick={() => {
                                navigate('/marketplace');
                            }}                            
                        >
                            Marketplace
                        </Link>
                    </Grid>
                    <Grid item xs={false} sm={1}>
                         <Typography color="white">
                            <b>{address? address : "Connect Wallet"} </b>
                        </Typography> 
                        {/* <Button
                            variant='contained'
                            color='error'
                        >
                            {address? address : "Connect"}
                        </Button>                         */}
                    </Grid>
                </Grid>
            </AppBar>
        </div>
    )
}

export default Header;