import { makeStyles } from '@mui/styles';
import { Box, Button, CircularProgress, Grid, Modal, TextField, Theme, Typography } from '@mui/material';

import React, { useState } from 'react'
import { Token } from '../../API';
import { burnToken, transferToken } from '../../api/Api';

interface ModalProps {
    open: boolean
    handleModal: () => void
    token: Token | undefined
    sell: boolean
    address: string | null
    closeModalRefresh: (success: boolean) => void
}
const useStyles = makeStyles((theme: Theme) => ({
    root: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        background: theme.palette.primary.dark,
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
        textAlign: 'center',
        color: theme.palette.primary.light
    },
    colorPrimary: {
        backgroundColor: '#e8eaf6'
      },
    barColorPrimary: {
        backgroundColor: '#03a9f4'
    }
  }));

const NFTModal:React.FC<ModalProps> = ({open, handleModal, token, sell, address, closeModalRefresh}: ModalProps) => {
    const [walletId, setWalletId] = useState<string>("");
    const [buyerAddress, setBuyerAddress] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);



    const classes = useStyles();
    const redeemToken = async () => {
        let result;
        try {
            if(address && token && walletId) {
                setIsLoading(true);
                result = await burnToken(address, walletId, token);
            }
            // result = await getTotalSupply('0xb8c4717638b27b0c85f0f2996187c1079d655622');
        }catch (error: any){
            console.log('error selling token');
        } finally {
            setIsLoading(false);
            if(result && result.headers.type === 'TransactionSuccess'){
                closeModalRefresh(true);
            }else{
                closeModalRefresh(false);
            }
        }
    }

    const sellToken = async () => {
        let result;
        try {
            if(buyerAddress && address && token) {
                setIsLoading(true);
                result = await transferToken(address, buyerAddress, walletId, token);
            }
        }catch (error: any){
            console.log('error selling token');
        } finally {
            setIsLoading(false);
            if(result && result.headers.type === 'TransactionSuccess'){
                closeModalRefresh(true);
            }else{
                closeModalRefresh(false);
            }
        }
    }

    const getModalMessage = () => {
        if(sell) {
            return `Would you like to sell ${token?.product?.name}?`
        }else {
            return ` Would you like to Redeem ${token?.product?.name}?`
        }
    }

    return(
        
        <Modal
            open={open}
            onClose={handleModal}                           
        >
            <Box className={classes.root}>
                    <div className={classes.content}>
                        <Grid container >
                            {isLoading ? (
                                 <Box sx={{ width: '100%' }}>
                                    <CircularProgress />
                                </Box>
                            ):(
                            <div>
                                <Grid item xs={12}>
                                    <Typography id="modal-modal-title" variant="h6">
                                        {getModalMessage()}
                                    </Typography>
                                </Grid>
                                {sell && (
                                    <Grid item xs={12}>
                                        <TextField 
                                            label="Buyer Address" 
                                            variant="outlined"
                                            required
                                            margin="dense"
                                            onChange={(e) => {
                                                setBuyerAddress(e.target.value)
                                            }}
                                            sx={{backgroundColor: '#FCF7F8', marginTop: '20px'}}

                                        />
                                    </Grid>
                                )}
                                <Grid item xs={12}>
                                    <TextField 
                                        label="Your Wallet ID" 
                                        variant="outlined"
                                        required
                                        margin="dense"
                                        onChange={(e) => {
                                            setWalletId(e.target.value)
                                        }}
                                        sx={{backgroundColor: '#FCF7F8', marginTop: '20px', marginBottom: '20px'}}
                                    />
                                </Grid>
                                <Grid xs={12}>
                                    <Button 
                                        size="small" 
                                        onClick={() => {
                                            sell ? sellToken() : redeemToken()
                                        }}
                                        variant='contained'
                                    >
                                        {sell ? 'Sell' : 'Redeem'}
                                    </Button>
                                </Grid>
                            </div>
                            )}
                        </Grid>
                    </div>
            </Box>
        </Modal>
    )

}

export default NFTModal