import React, { useState } from 'react';
// import { makeStyles } from '@mui/styles';
import { Button, Card, CardActions, CardContent, Typography, CardMedia } from '@mui/material';
import { Token } from '../../API';
import { makeStyles } from '@mui/styles';

interface NFTCardProps {
  token: Token
  handleModal: () => void
  setSelectedNFT: (token: Token) => void
  setSell: (sell: boolean) => void
}




const NFTCard: React.FC<NFTCardProps> = ({token, handleModal, setSelectedNFT, setSell}: NFTCardProps) => {

    const useStyles = makeStyles((theme) => ({
      card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: "center",
        alignItems: 'center',
      },
      cardContainer: {
        //might need this, it's annoying me
      
      },
      content: {
        padding: '10px',
        justifyContent: 'left',
        alignItems: 'left',
      }

    }));
    const classes = useStyles();

    return (
      <Card className={classes.card}>
        <div className={classes.cardContainer}>
          <CardMedia
            component="img"
            alt="NFT Shoe Image"
            height='140'
            image={token?.product?.img}
          />
        </div>
        <div>
          <CardContent className={classes.content}>
            <Typography variant="h5" component="div">
              {token?.product?.name}
            </Typography>
            <Typography gutterBottom variant="h6" color="text.secondary">
              Year: {token?.product?.year}
            </Typography>
            <Typography gutterBottom variant="h6" color="text.secondary">
              Id: {token.id}
            </Typography>
            <Typography gutterBottom variant="body2" color="text.secondary">
             Owner: {token?.product?.owner}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={() => {
              setSelectedNFT(token)
              handleModal()
              setSell(true)
            }}>Sell</Button>
            <Button size="small" onClick={() => {
              setSelectedNFT(token)
              handleModal()
              setSell(false)
            }}>Redeem</Button>
          </CardActions>
        </div>
      </Card>
    );
}

export default NFTCard;
