import React from 'react';
import { Button, Card, CardActions, CardContent, Typography, CardMedia, Theme } from '@mui/material';
import { Token } from '../../API';
import { makeStyles } from '@mui/styles';
import StarIcon from '@mui/icons-material/Star';

interface NFTCardProps {
  token: Token
  handleModal: () => void
  setSelectedNFT: (token: Token) => void
  setSell: (sell: boolean) => void
  address: string | null
}




const NFTCard: React.FC<NFTCardProps> = ({token, handleModal, setSelectedNFT, setSell, address}: NFTCardProps) => {

    const useStyles = makeStyles((theme: Theme) => ({
      card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: "center",
        alignItems: 'center',
      },
      content: {
        background: theme.palette.primary.dark,
        padding: '10px',
        justifyContent: 'left',
        alignItems: 'left',
        color: theme.palette.primary.light,
      },
      buttonContainer: {
        background: theme.palette.primary.dark,
      }, 
      text: {
        color: theme.palette.primary.light,
      }


    }));
    const classes = useStyles();

    return (
      <div className={classes.buttonContainer}>
        <Card className={classes.card} sx={{background: "#252323"}}>
          <div>
            <CardMedia
              component="img"
              alt="NFT Shoe Image"
              height='140'
              image={token?.product?.img}
              sx={{background: "#252323"}}
            />
          </div>
          <div>
            <CardContent className={classes.content}>
                <Typography variant="h5" component="div" className={classes.text}>
                  {token?.product?.name}
                </Typography>
                <Typography gutterBottom variant="h6" className={classes.text}>
                  Year: {token?.product?.year}
                </Typography>
                <Typography gutterBottom variant="body2" className={classes.text}>
                Owner: {token?.product?.owner}
                </Typography>
                <Typography gutterBottom variant="body2" className={classes.text}>
                {(address === token?.product?.owner) && (
                  <StarIcon />
                )}
                </Typography>
                <Typography variant="body2" component="div" className={classes.text}>
                  Expiration: {token?.expiration}
                </Typography>
            </CardContent>
            <CardActions className={classes.buttonContainer}>
              <Button 
                size="small" 
                onClick={() => {
                  setSelectedNFT(token)
                  handleModal()
                  setSell(true)
                }}
                sx={{background: "#252323", color: '#FCF7F8'}}
              >Sell</Button>
              <Button 
                size="small" 
                onClick={() => {
                  setSelectedNFT(token)
                  handleModal()
                  setSell(false)
                }}
                
                sx={{background: "#252323", color: '#FCF7F8'}}
                >Redeem</Button>
            </CardActions>
          </div>
        </Card>
      </div>
    );
}

export default NFTCard;
