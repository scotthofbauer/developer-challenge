import React, { useState } from 'react';
import { AppBar, Divider, Drawer, Hidden, IconButton, Link, List, ListItem, Theme, Toolbar } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useNavigate } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

 
export interface HeaderProps {
    address: string | null;
}

const useStyles = makeStyles((theme: Theme) => ({
    link: {
        marginRight: '20px',
        float: 'right'
    }
}));


const Header:React.FC<HeaderProps> = ({address}) => {
   const classes = useStyles();
   const navigate = useNavigate();
   const [open, setOpen] = useState<boolean>(false);

   return (
        <AppBar position='sticky' sx={{background: '#252323'}}>
                <Toolbar disableGutters>
                    <Link
                        className={classes.link}
                        component="button"
                        variant="button"
                        color='#f3e0ec'
                        underline='hover'
                        onClick={() => {
                            navigate('/');
                        }}
                        sx={{marginRight: 'auto', marginLeft: '20px'}}          
                                
                    >
                        Hoff Industries NFT Market
                    </Link>
                    <Hidden smDown >
                        <Link
                            className={classes.link}
                            component="button"
                            variant="button"
                            color='#ffffff'
                            underline='hover'
                            onClick={() => {
                                navigate('/');
                            }}
                            sx={{marginRight: '20px'}}                               
                        >
                            Home
                        </Link>
                        <Link
                            className={classes.link}
                            component="button"
                            variant="button"
                            color='#ffffff'
                            underline='hover'
                            onClick={() => {
                                navigate('/marketplace');
                            }}
                            sx={{marginRight: '20px'}}                             
                        >
                            Marketplace
                        </Link>
                        <Link
                            className={classes.link}
                            component="p"
                            variant="button"
                            color='#ffffff'
                            underline='none'
                            sx={{marginRight: '20px'}}                 
                        >
                            <b>{address? address : "Connect Wallet"} </b>
                        </Link>
                    </Hidden>
                    <Hidden smUp>
                        <IconButton onClick={() => setOpen(true)}>
                            <MenuIcon />
                        </IconButton>
                    </Hidden>
                    <Drawer 
                        anchor='right' 
                        open={open}
                        onClose={() => setOpen(false)}
                        PaperProps={{
                            sx: {
                              backgroundColor: "#252323",
                              
                            }
                          }}    
                    >
                        <div>
                            <IconButton onClick={() => setOpen(false)}>
                                <ChevronRightIcon />
                            </IconButton>
                        </div>
                        <Divider />
                        <List>
                            <ListItem>
                                <Link
                                    className={classes.link}
                                    component="button"
                                    variant="button"
                                    color='#FCF7F8'
                                    underline='none'
                                    onClick={() => {
                                        navigate('/');
                                    }}
                                    sx={{marginRight: '20px'}}                               
                                >
                                    Home
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link
                                    className={classes.link}
                                    component="button"
                                    variant="button"
                                    color='#FCF7F8'
                                    underline='none'
                                    onClick={() => {
                                        navigate('/marketplace');
                                    }}
                                    sx={{marginRight: '20px'}}                             
                                >
                                    Marketplace
                                </Link>
                            </ListItem>
                        </List>
                    </Drawer>
                </Toolbar>
        </AppBar>
   )
}

export default Header;