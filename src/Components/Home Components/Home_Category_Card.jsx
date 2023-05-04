import React from 'react'
import { Grid, Skeleton, Stack, Typography } from '@mui/material'
const Home_Category_Card = ({ catIcon, categoryName, headerFont, bodyFont, jobCount, query, icon }) => {
  console.log(catIcon)
  return (
    <Grid sx={{ display: 'flex', cursor: 'pointer', alignItems: 'center', justifyContent: `${query ? 'flex-start' : 'center'}` }} xs={12} md={3} item className='Jobsly_Home_Categories_Item_Container'>
      <Stack border='.5px solid #e5e5e5' height='15rem' direction='column' gap='1rem' width='90%' alignItems='center' justifyContent='center' className='Jobsly_Home_Categories_Item'>
        <Stack width='90%' direction='row' alignItems='center' justifyContent='flex-start'>
  
          <Typography fontFamily={headerFont} fontWeight={500} variant='h4'>
            {categoryName}
          </Typography>
        </Stack>

        <Stack width='90%' direction='row' alignItems='center' justifyContent='flex-start' gap='2rem'>
          <Typography fontFamily={`${bodyFont}-Medium`} fontWeight={500}fontSize='1.1rem' variant='subtitle'>
            {jobCount} jobs available
          </Typography>
          {icon}
        </Stack>
      </Stack>
    </Grid>

  )
}

export default Home_Category_Card