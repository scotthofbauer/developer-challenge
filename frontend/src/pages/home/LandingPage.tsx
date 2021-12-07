import React from 'react'
import { Button, Grid, IconButton } from '@mui/material';
import { makeStyles } from '@mui/styles';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


export interface LandingPageProps {
    address: string | null;
}


const LandingPage: React.FC<LandingPageProps> = ({address}: LandingPageProps) => {
    const useStyles = makeStyles(() => ({
        root: {
            display: 'flex',
            justifyContent: "center",
            alignItems: 'center',
            height: '100vh',
            textAlign: 'center',
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
        },       
    }));
    

    const classes = useStyles();

    const handleClick = async () => {
        try {
            const res = await fetch('/mint', {
                method: 'POST',
                body: JSON.stringify({
                    "to": `${address}`,
                    "tokenId": "4"
                }),
                headers: { 'Content-Type': 'application/json' }
            });
            console.log("res: ", res);

        }catch (error: any) {
            console.log("yep didn't have high hopes this would work");
        }
    }


    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <h1 className={classes.text}> Welcome to Hoff Industries NFTs</h1>
                <Button
                variant='contained'
                color='error'
                onClick={handleClick}
            >
                {address? "Mint" : "Connect"}

            </Button>
            </div>
        </div>
    )
}

export default LandingPage