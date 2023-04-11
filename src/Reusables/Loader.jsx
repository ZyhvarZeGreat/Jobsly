import React from 'react'
import {Grid ,CircularProgress} from  '@mui/material'
const Loader = () => {
    return (<Grid xs={12} container alignItems='center' justifyContent='center' minHeight='12rem'>
        <CircularProgress sx={{ color: 'var(--secondary-color)' }} size='4rem' thickness={2.5} />
    </Grid>
    )
}

export default Loader