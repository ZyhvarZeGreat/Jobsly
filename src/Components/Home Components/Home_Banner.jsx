import React from 'react'
import { Grid, Stack, useMediaQuery, useTheme } from '@mui/material'
const Home_Banner = () => {
  return (
    <Grid className='Jobsly_Home_Categories' item='true' xs={12} md={11}>
      <Stack className='Jobsly_Home_Categories_Text'>
        <h1>Start Posting Jobs Today</h1>
        <p>Make Your Recruitment Process Seamless</p>
      </Stack>

      <Stack className='Jobsly_Home_Categories_Image'>
        <img src='' alt='' />
      </Stack>
    </Grid>
  )
}

export default Home_Banner