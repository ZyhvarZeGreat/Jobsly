import React from 'react'
import { Grid, Stack, Skeleton } from '@mui/material'
const SkeletonLoader = ({ cards, height }) => {
    Array(cards).fill(0).map((i) => {
        return (
            <Grid key={i} xs={12} md={6} lg={3}>
                <Stack height={height} width='90%'>
                    <Skeleton height={'100%'} variant='rectangular'>
                      <Skeleton variant='text' sx={{fontSize:'1rem'}}/>
                    </Skeleton>
                </Stack>
            </Grid>
        )
    })

}

export default SkeletonLoader