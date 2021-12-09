import React from 'react';
import { AppBar, Button, Link, Toolbar, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useNavigate } from "react-router-dom";

export interface HeaderProps {
    address: string | null;
}

const useStyles = makeStyles(() => ({
    appbarTitle: {
        flexGrow: 1
    },
    links: {
        paddingRight: '10px'
    }
}));



const Header: React.FC<HeaderProps> = ({address}: HeaderProps) => {
    const classes = useStyles();
    const navigate = useNavigate();

    return (
        <div>
            <AppBar 
                position="sticky"
                color="transparent">
                <Toolbar>
                    <Typography className={classes.appbarTitle} color="white">
                    Hoff Industries NFT Market
                    </Typography>
                    <div>
                        <Link
                            className={classes.links}
                            component="button"
                            variant="button"
                            color='#ffffff'
                            underline='none'
                            onClick={() => {
                                navigate('/');
                            }}                            
                        >
                            Home
                        </Link>
                        &nbsp;
                        &nbsp;
                        &nbsp;
                        &nbsp;
                        <Link
                            component="button"
                            variant="button"
                            color='#ffffff'
                            underline='none'
                            onClick={() => {
                                navigate('/marketplace');
                            }}                            
                        >
                            Marketplace
                        </Link>
                        &nbsp;
                        &nbsp;
                        &nbsp;
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