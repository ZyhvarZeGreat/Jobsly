import React from 'react'
import { Alternate_Hero } from '../../Reusables/index'
import {Grid ,Stack} from '@mui/material'
import { Job_Info } from '../../Components/Jobs Components/index'
const Jobs = () => {
  return (
    <Grid  container alignItems='center' justifyContent='center' xs={12}>
      <Alternate_Hero header='Find Your' span='Dream Job' />

      <Grid container xs={11} alignItems='center' direction='row' justifyContent='center'>
        <Grid item className = 'Jobsly_Jobs_Info' xs={12} md={12}>
          <Job_Info/>
        </Grid>
      </Grid>  
    </Grid>
  )
}

export default Jobs