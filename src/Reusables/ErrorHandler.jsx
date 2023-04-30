import React from 'react'
import errorImage from '../assets/errorImage.png'
import { Grid, Typography, Stack, Box } from '@mui/material'
import {headerFont} from '../Reusables/constants'
const ErrorHandler = (props) => {
    return (
        <Grid height='40rem' container alignItems='flex-start' justifyContent={'center'}    xs={12} md={9}>
            <Stack   alignItems='center' justifyContent={'center'} width='90%'>
                <img style={{ height:'25rem',width:'35rem',objectFit:'contain'}} src={errorImage} />
                <Typography marginTop={'-3rem'} fontFamily={headerFont} variant='h5' component='h4'>
                    Sorry the data you requested is not available,try another filter
                </Typography>
            </Stack>

        </Grid>
    )
}

export default ErrorHandler