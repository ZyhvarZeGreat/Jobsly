import React from 'react'
import { Link } from 'react-router-dom'
import { UilArrowRight } from '@iconscout/react-unicons'
import fetchJobs from '../../Services/fetchJobs'
import { useQuery } from '@tanstack/react-query'

import { Grid, Stack, Box, useTheme, useMediaQuery, Typography, Skeleton } from '@mui/material'
import './Home_Featured_Jobs.css'
const Home_Featured_Jobs = () => {

  const headerFont = 'Clash Display Semibold,sans-serif'
  const bodyFont = 'Gilroy,sans-serif'
  const baseUrl = 'http://localhost:1337'
  const { status, data, error, isLoading, isError } = useQuery({
    queryKey: ['jobs'],
    queryFn: fetchJobs
  })

  const loading = status === 'loading'
  const Error = status === 'error'

  console.log(loading)
  console.log(Error)
  if (isLoading) {
    return <Skeleton height='8rem' width='12rem'></Skeleton>
  }

  if (isError) {
    return <div>Error{error}</div>
  }

  return (
    <Grid xs={11.5} direction='column' gap='2rem' container className='Jobsly_Featured_Jobs'>
      <Stack width='100%' direction='row' gap='2rem' alignItems='center' justifyContent='space-between' >
        <Typography variant='h3' className='Jobsly_Home_Categories_Header' fontFamily={headerFont} >
          Featured  <span style={{ color: 'var(--hero-stat-color' }}>Jobs</span>
        </Typography>
        <Link style={{ display: 'flex', color: 'var(--secondary-color)', alignItems: 'center', flexDirection: 'row', gap: '.8rem', justifyContent: 'center' }} to='/Jobs'>
          <Typography fontWeight='600' fontFamily={bodyFont} variant='subtitle1'>
            Show all jobs
          </Typography>
          <UilArrowRight />
        </Link>
      </Stack>

      <Grid xs={12} container alignItems='flex-start' rowGap='3rem' justifyContent='space-between'>
        {data.data.map((data) => {
          const { id, attributes } = data
          const { Job_Title, Job_Description, employments, categories, companies, locations } = attributes
          const categoryName = categories.data[1]?.attributes.Category_Name
          const employmentType = employments.data[1]?.attributes.employment
          const companyName = companies.data[2]?.attributes.Company_Name;
          const location = locations.data[2]?.attributes.head_office;
          const imgUrl = companies.data[2].attributes.Company_Logo.data.attributes.url

          return (
            <Grid key={Job_Title} item sx={{ display: 'flex', alignItems: 'flex-start', gap: '2rem', justifyContent: "space-between", flexDirection: 'column' }} xs={12} md={3}>

              {loading ? <Skeleton height='18rem' width='95%' /> : <Stack height='18rem' gap='1rem' border='.5px solid #e5e5e5' alignItems='center' justifyContent='center' width='95%' direction='column'>
                <Stack height='90%' alignItems='center' justifyContent='space-around' width='95%' className='Jobsly_Featured_Jobs_Container'>
                  <Stack width='90%' direction='row' alignItems='center' justifyContent='space-between' >
                    <Box className='card_img_container'>
                      <img className='card_img' src={`${baseUrl}${imgUrl}`} alt='' />
                    </Box>
                    <Box border='1px solid var(--secondary-color)' display='flex' alignItems='center' justifyContent='center' height='2.2rem' width='6rem'>
                      <Typography fontFamily={bodyFont} variant='subtitle2' color='var(--secondary-color)'>
                        {employmentType}
                      </Typography>
                    </Box>
                  </Stack>

                  <Stack width='93%' gap='.6rem' alignItems='flex-start' direction='column'>
                    <Typography fontFamily={bodyFont} fontWeight='500' variant='h5' fontSize='var(--text-xl)' > {Job_Title}</Typography>
                    <Stack width='100%' direction='row' color='var(--footer-alt-text-color)' alignItems='center' gap='.6rem' justifyContent='flex-start'>
                      <Typography fontFamily={bodyFont} fontWeight='500' variant='body1' component='p'>
                        {companyName}
                      </Typography>

                      <Typography fontFamily={bodyFont} fontWeight='500' variant='body1' component='p'>
                        {location}
                      </Typography>
                    </Stack>
                    <Typography color='var(--footer-alt-text-color)' fontFamily={bodyFont} fontWeight='500' variant='subtitle1'> {Job_Description.substring(0, 83)}... </Typography>

                  </Stack>

                  <Stack width='93%' alignItems='flex-start' justifyContent='flex-start' direction='column'>
                    <Box className={`Jobsly_Featured_Jobs -${categoryName}`} borderRadius='20px' height='2rem' display='flex' alignItems='center' justifyContent='center' width='8rem'>
                      <Typography fontFamily={bodyFont} fontWeight='500' fontSize='.9rem' variant='subtitle1' component='p'>
                        {categoryName}
                      </Typography>
                    </Box>
                  </Stack>
                </Stack>
              </Stack>}
            </Grid>
          )
        })}
      </Grid>
    </Grid>
  )
}

export default Home_Featured_Jobs