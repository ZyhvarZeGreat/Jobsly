import React from 'react'
import { Grid, useTheme, useMediaQuery } from '@mui/material'
import { Hero } from '../../Reusables/index'
import { Home_Banner, Home_Categories, Home_Companies, Home_Featured_Jobs, Home_Latest_Jobs } from '../../Components/Home Components/index'
const Home = () => {


  const theme = useTheme()
  const query = useMediaQuery(theme.breakpoints.up('md'))

  return (
    <Grid alignItems='center' gap={query ? '6rem' : '4rem'} direction='column' justifyContent='center' container xs={12}>
      <Hero />
      <Home_Companies />
      <Home_Categories />
      {/* <Home_Banner/> */}
      <Home_Featured_Jobs />
      <Home_Latest_Jobs />
    </Grid>
  )
}

export default Home