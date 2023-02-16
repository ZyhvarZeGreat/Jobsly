import React, { useState, useEffect } from 'react'
import { Grid, Stack, Box, useTheme, useMediaQuery, Typography, Skeleton } from '@mui/material'
import fetchLatestJobs from '../../Services/fetchLatestJobs'
import { useQuery } from '@tanstack/react-query'
import { baseUrl, headerFont, bodyFont } from '../../Reusables/constants'
import { Link } from 'react-router-dom'
import { UilArrowRight } from '@iconscout/react-unicons'
import './Home_Latest_Jobs.css'
const Home_Latest_Jobs = () => {
    const headerFont = 'Clash Display Semibold,sans-serif'
    const bodyFont = 'Gilroy,sans-serif'
    const { data, error, isError, isLoading } = useQuery({
        queryKey: ['jobs', 1],
        queryFn: fetchLatestJobs
    })
    if (isError) {
        return <div>error</div>
    }
    const queryFixer = (param, target, id) => {
        return (`${param}?.data[${id}].attributes.${target}`)
    }


    return (
        <Grid xs={11.5} direction='column' gap='2rem' container className='Jobsly_Home_Latest_Jobs'>
            <Stack width='100%' direction='row' alignItems='center' justifyContent='space-between' >
                <Typography variant='h3' className='Jobsly_Home_Categories_Header' fontFamily={headerFont} >
                    Latest   <span style={{ color: 'var(--hero-stat-color' }}>Jobs</span>
                </Typography>
                <Link style={{ display: 'flex', color: 'var(--secondary-color)', alignItems: 'center', flexDirection: 'row', gap: '.8rem', justifyContent: 'center' }} to='/Jobs'>
                    <Typography fontWeight='600' fontFamily={bodyFont} variant='subtitle1'>
                        Show all jobs
                    </Typography>
                    <UilArrowRight />
                </Link>
            </Stack>

            {isError ? <div> Error:{error}</div> : ''}

            <Grid xs={12} alignItems='center' rowGap='2rem' justifyContent='space-between' container className='Jobsly_Home_Latest_Jobs_Container'>
                {
                    data?.data.map((data) => {
                        const { Job_Title, id, companies, employments, locations, categories, levels } = data?.attributes
                        const companyName = companies?.data[3]?.attributes.Company_Name
                        const location = locations?.data[3]?.attributes.head_office
                        const employment = employments?.data[0]?.attributes.employment
                        const categoryName = categories?.data[3]?.attributes.Category_Name
                        const imageUrl = companies.data[3].attributes.Company_Logo.data.attributes.url
                        const finalImageUrl = `${baseUrl}${imageUrl}`
                        return (
                            <Grid key={Job_Title} sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center' }} item xs={12} sm={8} md={5.7}>
                                {isError ? <div>Error</div> : <div></div>}
                                {isLoading ? <Skeleton width='100%' height='20rem'></Skeleton> :
                                    <Stack height='13rem' width='100%'>
                                        <Stack alignItems='flex-end' direction='row' border='1px solid #e5e5e5' justifyContent='center' height='100%' width='90%' backgroundColor='white'>
                                            <Stack width='30%' height='85%' alignItems='center' justifyContent='center'>
                                                <Stack alignItems='center' width='90%' height='50%'>
                                                    <Box display='flex' alignItems='center' justifyContent='center' height='3rem' width='6rem' >
                                                        <img className='card_img' src={finalImageUrl} alt='' />
                                                    </Box>
                                                </Stack>
                                            </Stack>

                                            <Stack width='70%' height='85%' justifyContent='center' gap='.4rem' className='Jobsly_Latest_Jobs_Details'>
                                                <Typography variant='h4' fontSize='var(--text-xxl)' fontFamily={bodyFont} fontWeight='600' component='h4'>{Job_Title}</Typography>
                                                <Stack alignItems='center' justifyContent='flex-start' gap='.6rem' width='100%' direction='row'>
                                                    <Typography variant='h6' color='var(--footer-alt-text-color)' fontFamily={bodyFont} fontSize='var(--text-lg)' component='p'>{companyName}</Typography>
                                                    <Typography variant='h6' color='var(--footer-alt-text-color)' fontFamily={bodyFont} fontSize='var(--text-lg)' component='p'>{location}</Typography>
                                                </Stack>
                                                <Stack width='100%' gap='1rem' direction='row'>
                                                    <Box display='flex' alignItems='center' justifyContent='center' height='2rem' borderRadius='20px' width='6rem' className={`Jobsly_Latest_Jobs_Tags Latest_${employment}`}>
                                                        <Typography variant='h6' fontFamily={bodyFont} fontSize='var(--text-base)' component='p'>{employment}</Typography>
                                                    </Box>
                                                    <Box display='flex' alignItems='center' justifyContent='center' className={`Jobsly_Latest_Jobs_Tags Latest_${categoryName}`} height='2rem' borderRadius='20px' width='8rem'>
                                                        <Typography variant='h6' fontFamily={bodyFont} fontSize='var(--text-base)' component='p'>{categoryName}</Typography>
                                                    </Box>
                                                </Stack>
                                            </Stack>
                                        </Stack>
                                    </Stack>}
                            </Grid>
                        )
                    })
                }
            </Grid>
        </Grid>
    )
}

export default Home_Latest_Jobs