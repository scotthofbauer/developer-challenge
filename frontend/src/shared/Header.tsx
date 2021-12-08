import React from 'react';
import { AppBar, Button, Link, Toolbar, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

export interface HeaderProps {
    address: string | null;
}

const useStyles = makeStyles(() => ({
    appbarTitle: {
        flexGrow: 1
    },   
}));



const Header: React.FC<HeaderProps> = ({address}: HeaderProps) => {
    const classes = useStyles();

    return (
        <div>
            <AppBar 
                position="sticky"
                color="transparent">
                <Toolbar>
                    <Typography className={classes.appbarTitle} color="white">
                    Scott Hofbauer
                    </Typography>
                    <div>
                        <Link
                            component="button"
                            variant="button"
                            color='#ffffff'
                            underline='none'
                            onClick={() => {
                                console.info("I'm a button.");
                            }}                            
                        >
                            Browse
                        </Link>
                        &nbsp;
                        <Button
                            variant='contained'
                            color='error'
                        >
                            {address? address : "Connect"}
                        </Button>                        
                    </div>
                    
                </Toolbar>
            </AppBar>
        </div>
    )

}

export default Header;