import React from 'react'
import { Grid, Stack, Typography, Skeleton } from '@mui/material'
import { Link } from 'react-router-dom'
import { UilArrowRight } from '@iconscout/react-unicons'
import { useQuery } from '@tanstack/react-query'
import fetchCategories from '../../Services/fetchCategories'
import './Home_Categories.css'
const Home_Categories = () => {
  const headerFont = 'Clash Display Semibold,sans-serif'
  const bodyFont = 'Gilroy,sans-serif'

  const categoryQuery = useQuery({
    queryKey: ['categories'],
    queryFn: fetchCategories
  })

  const { data, error, isError, isLoading } = categoryQuery

  if (isLoading) {
    return <div>Loading</div>
  }

  if (isError) {
    return <div>Error! {error.message}</div>
  }




  return (
    <Grid xs={11.5} gap='2rem' direction='column' container className='Jobsly_Home_Categories'>
      <Stack direction='row' className='Jobsly_Home_Categories_Header' alignItems='center' justifyContent='space-between' width='100%'>
        <Typography variant='h3' className='Jobsly_Home_Categories_Header' fontFamily={headerFont} >
          Explore by <span style={{ color: 'var(--hero-stat-color' }}>category</span>
        </Typography>

        <Link style={{ display: 'flex', color: 'var(--secondary-color)', alignItems: 'center', flexDirection: 'row', gap: '.8rem', justifyContent: 'center' }} to='/Jobs'>
          <Typography fontWeight='600' fontFamily={bodyFont} variant='subtitle1'>
            Show all jobs
          </Typography>
          <UilArrowRight />
        </Link>
      </Stack>


      <Grid xs={12} container alignItems='center' justifyContent='space-between' rowGap='1rem'>
        {data.data.map((category) => {
          const { attributes } = category
          const { Category_Name, jobs } = attributes
          return (
            <Grid sx={{ display: 'flex', cursor: 'pointer', alignItems: 'center', justifyContent: 'flex-start' }} xs={12} md={3} item className='Jobsly_Home_Categories_Item_Container'>
              {isLoading ? <Skeleton height='15rem' width='90%'/>  : <Stack border='.5px solid #e5e5e5' height='15rem' direction='column' gap='1rem' width='90%' alignItems='center' justifyContent='center' className='Jobsly_Home_Categories_Item'>
                <Stack width='90%' direction='row' alignItems='center' justifyContent='flex-start'>
                  <Typography fontFamily={headerFont} variant='h4'>
                    {Category_Name}
                  </Typography>
                </Stack>

                <Stack width='90%' direction='row' alignItems='center' justifyContent='flex-start' gap='2rem'>
                  <Typography fontFamily={bodyFont} fontWeight='500' fontSize='1.1rem' variant='subtitle'>
                    {jobs.data.length} jobs available
                  </Typography>

                  <UilArrowRight />
                </Stack>
              </Stack>}
            </Grid>

          )
        })}
      </Grid>

    </Grid>

  )
}

export default Home_Categories