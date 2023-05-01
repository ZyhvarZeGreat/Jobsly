import React from 'react'
import { Grid } from '@mui/material'
import { Hero } from '../../Reusables/index'
import { Home_Banner,Home_Categories,Home_Companies,Home_Featured_Jobs,Home_Latest_Jobs } from '../../Components/Home Components/index'
const Home = () => {
  return (
    <Grid alignItems='center' gap='3rem' direction ='column'justifyContent='center' container  xs={12}>
    <Hero/>
    <Home_Companies/>
    <Home_Categories/>
    {/* <Home_Banner/> */}
    <Home_Featured_Jobs/>
    <Home_Latest_Jobs/>
      </Grid>
  )
}

export default Home