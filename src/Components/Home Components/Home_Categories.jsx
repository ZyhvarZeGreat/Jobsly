import React from 'react'
import { Grid, Stack, Typography, Skeleton, useMediaQuery, useTheme } from '@mui/material'
import { Link } from 'react-router-dom'
import { UilArrowRight } from '@iconscout/react-unicons'
import { useQuery } from '@tanstack/react-query'
import Loader from  '../../Reusables/Loader'
import fetchCategories from '../../Services/fetchCategories'
import Home_Category_Card from './Home_Category_Card'
import './Home_Categories.css'
import ErrorHandler from '../../Reusables/ErrorHandler'
const Home_Categories = () => {
  const headerFont = 'Clash Display Semibold,sans-serif'
  const bodyFont = 'Gilroy,sans-serif'

  const categoryQuery = useQuery({
    queryKey: ['categories'],
    enabled:true,
    queryFn: fetchCategories
  })
  const theme = useTheme()
  const query = useMediaQuery(theme.breakpoints.up('md'))
  const { data, error, isError, isLoading } = categoryQuery

  if (isLoading) {
    return <Loader/>
  }
  if (isError) {
    console.log(error)
    return <ErrorHandler message={error.message}/>
  }





  return (
    <Grid xs={11.5} gap='3rem' direction='column' container className='Jobsly_Home_Categories'>
      <Stack direction='row' className='Jobsly_Home_Categories_Header' alignItems='center' justifyContent='space-between' width='100%'>
        <Typography variant={query ? 'h3':'h4'} className='Jobsly_Home_Categories_Header' fontFamily={headerFont} >
          Explore by <span style={{ color: 'var(--hero-stat-color' }}>category</span>
        </Typography>

        <Link style={{ display: 'flex', color: 'var(--secondary-color)', alignItems: 'center', flexDirection: 'row', gap: '.8rem', justifyContent: 'center' }} to='/Jobs'>
          <Typography fontWeight='600' fontFamily={bodyFont} variant='subtitle1'>
            Show all jobs
          </Typography>
          <UilArrowRight />
        </Link>
      </Stack>


      <Grid xs={12} container alignItems='center' justifyContent={'center'}rowGap='1rem'>
        {data?.data?.map((category) => {
          const { attributes } = category
          const { Category_Name, jobs,icon } = attributes
          return (
       <>
       { isLoading ? <Loader/>:<Home_Category_Card loading={isLoading} query={query} catIcon={icon?.data?.attributes.url} icon={<UilArrowRight />} headerFont={headerFont} bodyFont={bodyFont} categoryName={Category_Name} jobCount={jobs.data.length}/>}
       </>
          )
        })}
      </Grid>

    </Grid>

  )
}

export default Home_Categories