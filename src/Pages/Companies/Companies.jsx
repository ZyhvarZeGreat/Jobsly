import React from 'react'
import { Alternate_Hero,Search_Form } from '../../Reusables/index'
import {Grid,Stack,Box,Typography,useMediaQuery,useTheme} from '@mui/material'
import {Recommended_Companies} from '../../Components/Company Components/index'
const Companies = () => {
  return (
    <Grid xs ={12} container alignItems='center' justifyContent='center'>
     <Alternate_Hero header='Find your dream' span='Companies'/>
     <Recommended_Companies/>
    </Grid>
  )
}

export default Companies