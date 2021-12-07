import { Grid } from '@mui/material';
import React from 'react';
import NFTCard from '../../shared/NFTCard';

const Content = () => {

    return (
        <Grid container spacing={4}>
            <Grid item xs={12} sm={4}>
                <NFTCard />
            </Grid>
            <Grid item xs={12} sm={4}>
                <NFTCard />
            </Grid>
            <Grid item xs={12} sm={4}>
                <NFTCard />
            </Grid>
            <Grid item xs={12} sm={4}>
                <NFTCard />
            </Grid>
            <Grid item xs={12} sm={4}>
                <NFTCard />
            </Grid>
            <Grid item xs={12} sm={4}>
                <NFTCard />
            </Grid>
        </Grid>
    )
}

export default Content;