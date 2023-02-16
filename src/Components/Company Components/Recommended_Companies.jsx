import React from 'react'
import { Grid, Stack, Box, Skeleton, Typography, useMediaQuery, useTheme } from '@mui/material'
import { fetchCompanies } from '../../Services/fetchCompanies'
import { bodyFont, headerFont } from '../../Reusables/constants'
import { useQuery } from '@tanstack/react-query'
import './Recommended_Jobs.css'
import { baseUrl } from '../../Reusables/constants'
const Recommended_Companies = () => {

    const { data, isError, isLoading } = useQuery({
        queryKey: ['companies'],
        queryFn: fetchCompanies
    })

    if (isLoading) {
        return <Skeleton height='10rem' width='20rem' />
    }

    if (isLoading) {
        return <div>Error</div>
    }
    return (
        <Grid xs={11.5} container backgroundColor='blue'>
            <Grid xs={12} container className='Jobsly_Recommended_Companies_Header'>

                <Stack height='8rem' >
                    <Typography fontFamily={headerFont} variant='h3' component='h2'>
                        Recommended Companies
                    </Typography>
                    <Typography fontFamily={bodyFont} variant='body1' component='p'>
                        Based on your profile, company,preferences, and recent activity
                    </Typography>
                </Stack>

                <Grid xs={12} container alignItems='center' rowGap='2rem' justifyContent='space-between'>

                    {
                        data.data.map((data) => {
                            const { Company_Name, Company_Description, jobs, categories, Company_Logo } = data.attributes
                           const imgUrl = Company_Logo?.data?.attributes.url

                            console.log(Company_Name)
                            return (
                                <Grid key={Company_Name} xs={12} backgroundColor='red' md={3} item >
                                    <Stack backgroundColor='aqua' height='15rem' width='90%'>
                                      <Box width='8rem' height='3rem' className='Jobsly_Recommended_Companies_Image_Container'>
                                      <img className='Jobsly_Recommended_Companies_Image' src={`${baseUrl}${imgUrl}`} alt='' />
                                      </Box>
                                        <Typography variant='h4' component='h4'>
                                            {Company_Name}
                                        </Typography>
                                        <Typography variant='body1' component='p'>
                                            {Company_Description.substring(0,200)}...
                                        </Typography>
                                        <Box className={`${categories}`}></Box>
                                        {jobs.data.length}
                                    </Stack>
                                </Grid>
                            )
                        })
                    }
                </Grid>

            </Grid>
        </Grid>
    )
}

export default Recommended_Companies