import { Grid } from '@mui/material'
import ReactLoading from 'react-loading'
import React from 'react';
const Loading = () => {
    return (
        <Grid
           container
           spacing={0}
           direction="column"
           alignItems="center"
           justifyContent="center"
           style={{ minHeight: '100vh' }}>
           <ReactLoading type='type' color='color' height={'20%'} width={'20%'} />

        </Grid>
    )
}

export default Loading