import { makeStyles } from '@mui/styles';
import { Box, Button, Grid, Modal, TextField, Typography } from '@mui/material';

import React, { useState } from 'react'
import { Token } from '../../API';
import { borderRadius, borderRight, display } from '@mui/system';
import { burnToken } from '../../api/Api';

interface ModalProps {
    open: boolean
    handleModal: () => void
    token: Token | undefined
    sell: boolean
    address: string | null
}

const NFTModal:React.FC<ModalProps> = ({open, handleModal, token, sell, address}: ModalProps) => {
    const [walletId, setWalletId] = useState<string>("");

    const useStyles = makeStyles((theme) => ({

        root: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            background: 'white',
            border: '2px solid #000',
            boxShadow: '10px',
            height: '50%',
            width: '30%',
            borderRadius: "25px",
            display: 'flex',
            flexDirection: 'column'
        }, 
        content: {
            position: 'absolute',
            top: '40%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center'
        },
        button: {
            paddingTop: '20px'
        },
        // [theme.breakpoints.down('')]: {

        // }

      }));


    const classes = useStyles();
    console.log("selected token: ", token);
    console.log('sell', sell);
    
    const redeemToken = async () => {
        if(token && address) {
            const result = await burnToken(address, walletId, token);
        }
    }
    console.log("walletId: ", walletId);
    return(
        
        <Modal
            open={open}
            onClose={handleModal}                           
        >
            <Box className={classes.root}>
                {sell ? (
                    <div className={classes.content}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            
                            Would you like to sell <b>{token?.product?.name}</b> ?
                        </Typography>
                        
                        <Button 
                            className={classes.button}
                            size="small" 
                            onClick={() => {
                                console.log("Burning token")
                                
                            }}
                            variant='contained'
                            color='success'
                        >
                            Sell
                        </Button>
                    </div>
                    
                ): (
                    <div className={classes.content}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Would you like to Redeem <b>{token?.product?.name}</b>?
                        </Typography>
                        <TextField 
                            id="outlined-basic"
                            label="Wallet ID" 
                            variant="outlined"
                            required
                            margin="dense"
                            onChange={(e) => {
                                setWalletId(e.target.value)
                            }}
                            
                        />

                        <Button 
                            className={classes.button}
                            size="small" 
                            onClick={() => {
                                console.log("Burning token")
                                redeemToken();
                            }}
                            variant='contained'
                            color='success'
                        >

                            Redeem
                        </Button>
                    </div>
                )}
                
            </Box>
        </Modal>
    )

}

export default NFTModal