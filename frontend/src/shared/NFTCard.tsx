import React from 'react';
// import { makeStyles } from '@mui/styles';
import ShareIcon from '@mui/icons-material/Share';
import { Button, Card, CardActions, CardContent, CardMedia, CardHeader, Typography, Avatar, IconButton } from '@mui/material';


const NFTCard = () => {
    return (
      <Card>
        <CardHeader
          avatar={
            <Avatar>
              S
            </Avatar> 
          }
          actions={
            <IconButton>
              <ShareIcon />
            </IconButton>
          }
        >
        </CardHeader>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            NFT Image
          </Typography>
          <Typography variant="body2" color="text.secondary">
            This NFT was minted by Scott Hofbauer on Decemember 5th, 2021.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    );
}

export default NFTCard;
