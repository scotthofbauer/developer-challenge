import React from 'react';
import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        justifyContent: "center",
        alignItems: 'center',
        height: '100vh',
        textAlign: 'center',
    }, 
    appbar: {
        background: 'none'
    },
    appbarWrapper: {
        width: '80%',
        margin: '0 auto'
    },
    appbarTitle: {
        flexGrow: 1
    },
    container: {
        diplsay: 'flex',
        alignItems: 'center',
    },
    text: {
        fontSize: '2rem',
        color:'white'
    },
    arrow: {
        color: 'white',
        fontSize: '4rem',
    }
}));

const Header = () => {
    const classes = useStyles();

    // const scrollToInfoPage = () => {
    // }

    return (
        <div>
            <AppBar 
                position="sticky"
                color="transparent">
                <Toolbar>
                    <Typography className={classes.appbarTitle} color="white">
                    Scott Hofbauer
                    </Typography>
                    <Button
                        variant='contained'
                        color='error'
                    >
                        Connect
                    </Button>
                </Toolbar>
            </AppBar>
            <div className={classes.root}>
                <div className={classes.container}>
                    <h1 className={classes.text}> Welcome to Nike NFTs</h1>
                    <IconButton>
                        <KeyboardArrowDownIcon className={classes.arrow}/>
                    </IconButton>
                </div>
            </div>
        </div>
    )

}

export default Header;