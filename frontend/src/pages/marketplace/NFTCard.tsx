import React from 'react';
// import { makeStyles } from '@mui/styles';
import { Button, Card, CardActions, CardContent, Typography, CardMedia } from '@mui/material';
import { Token } from '../../API';

interface NFTCardProps {
  token: Token
}


const NFTCard: React.FC<NFTCardProps> = ({token}: NFTCardProps) => {
    return (
      <Card>
        <CardMedia
          component="img"
          alt="NFT Shoe Image"
          height="140"
          image={token?.product?.img}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {token.id}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            This NFT was minted by {token.contractTokensId} on Decemember 5th, 2021.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Sell</Button>
          <Button size="small">Redeem</Button>
        </CardActions>
      </Card>
    );
}

export default NFTCard;
