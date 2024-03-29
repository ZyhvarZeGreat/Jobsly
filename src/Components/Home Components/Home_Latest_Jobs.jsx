import React, { useState, useEffect } from 'react'
import { Grid, Stack, Box, useTheme, useMediaQuery, Typography, Skeleton } from '@mui/material'
import fetchLatestJobs from '../../Services/fetchLatestJobs'
import { useQuery } from '@tanstack/react-query'
import { headerFont, bodyFont } from '../../Reusables/constants'
import { Link } from 'react-router-dom'
import Loader from '../../Reusables/Loader'
import { UilArrowRight } from '@iconscout/react-unicons'
import ErrorHandler from '../../Reusables/ErrorHandler'
import './Home_Latest_Jobs.css'
const Home_Latest_Jobs = () => {

    const { data, error, isError, isLoading } = useQuery({
        queryKey: ['jobs', 1],
        queryFn: fetchLatestJobs,
        retry:3,
        enabled:true
    })

    const theme = useTheme()
    const query = useMediaQuery(theme.breakpoints.up('md'))

    if (isLoading){
        return <Loader/>
    }
    if  (isError) {
        console.log(error)
        return <ErrorHandler message={error.message}/>
      }
    
    const queryFixer = (param, target, id) => {
        return (`${param}?.data[${id}].attributes.${target}`)
    }


    console.log(data)

    return (
        <Grid xs={12} sm={12} md={11.5} lg={11.5} direction='column' marginBottom={'3rem'} gap='2rem' container className='Jobsly_Home_Latest_Jobs'>
            <Stack width='95%'  direction='row' alignItems='center' justifyContent={query ? 'space-between':'center'} >
                <Typography variant={query ? 'h3':'h4'} className='Jobsly_Home_Categories_Header' fontFamily={headerFont} fontWeight={600} >
                    Latest   <span style={{ color: 'var(--hero-stat-color' }}>Jobs</span>
                </Typography>
             { query &&   <Link style={{ display: 'flex', color: 'var(--secondary-color)', alignItems: 'center', flexDirection: 'row', gap: '.8rem', justifyContent: 'center' }} to='/Jobs'>
                    <Typography fontWeight='600' fontFamily={'Gilroy-Medium,sans-serif'} variant='subtitle1'>
                        Show all jobs
                    </Typography>
                    <UilArrowRight />
                </Link>}
            </Stack>


            <Grid xs={12} alignItems='center' rowGap='2rem' justifyContent={query ? 'space-between':'center'} container className='Jobsly_Home_Latest_Jobs_Container'>
                {
                    data?.data.map((data) => {
                        const { Job_Title, id, company, employment, location, categories, levels } = data?.attributes
                        const companyName = company?.data?.attributes.Company_Name
                        const jobLocation = location?.data?.attributes.head_office
                        const employmentType = employment?.data?.attributes.employment
                        const categoryName = categories?.data[0]?.attributes.Category_Name
                        const imgUrl = company.data?.attributes.Company_Logo.data.attributes.url 

                        return (
                            <Grid key={Job_Title} sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center' }} item xs={12} sm={6} md={5.9}>
                                {isError && <ErrorHandler/>}
                                {isLoading ? <Skeleton width='100%' height='20rem'></Skeleton> :
                                    <Stack height={query ? '13rem':'15rem' }width='100%' alignItems={query ? 'flex-start':'center'}>
                                        <Stack alignItems={ query ? 'flex-end':'center'} gap={query ? '':'1rem'} direction={query  ? 'row':'column'} border='1px solid #e5e5e5' justifyContent='center' height='100%' width={query ? '90%':'95%'} >
                                            <Stack alignSelf={'flex-start'} width='30%' height={query ? '85%':'40%'} alignItems='center' justifyContent='center'>
                                                <Stack alignItems='center' width='90%' height={query ? '50%':"30%"}>
                                                    <Box display='flex' alignItems='center' justifyContent='center' height='3rem' width='6rem' >
                                                        <img className='card_img' src={`${import.meta.env.VITE_BASE_URL}${imgUrl}`} alt='' />
                                                    </Box>
                                                </Stack>
                                            </Stack>

                                            <Stack width={query ? '70%':'90%'} height={query ? '85%':'65%'}  justifyContent='center' gap='.4rem' className='Jobsly_Latest_Jobs_Details'>
                                                <Typography variant='h4' fontSize='var(--text-xxl)' fontFamily={'Gilroy-Regular,sans-serif'} fontWeight='600' component='h4'>{Job_Title}</Typography>
                                                <Stack  alignItems='center' justifyContent='flex-start' gap='.6rem' width='100%' direction='row'>
                                                    <Typography variant='h6' color='var(--footer-alt-text-color)' fontFamily={bodyFont} fontSize={query ? 'var(--text-lg)':'var(--text-base)'} component='p'>{companyName}</Typography>
                                                    <Typography variant='h6' color='var(--footer-alt-text-color)' fontFamily={bodyFont} fontSize={query ? 'var(--text-lg)':'var(--text-base)'}component='p'>{jobLocation}</Typography>
                                                </Stack>
                                                <Stack width='100%' gap='1rem' direction='row'>
                                                    <Box display='flex' alignItems='center' justifyContent='center' height='2rem' borderRadius='20px' width='6rem' className={`Jobsly_Latest_Jobs_Tags -${employmentType}`}>
                                                        <Typography variant='h6' fontFamily={bodyFont} fontSize='var(--text-base)' component='p'>{employmentType}</Typography>
                                                    </Box>
                                                    <Box display='flex' alignItems='center' justifyContent='center' className={`Jobsly_Latest_Jobs_Tags -${categoryName}`} height='2rem' borderRadius='20px' width='8rem'>
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

            {
               !query && <Link style={{ display: 'flex', color: 'var(--secondary-color)', alignItems: 'center', flexDirection: 'row', gap: '.8rem', justifyContent: 'center' }} to='/Jobs'>
                   <Typography fontWeight='600' fontSize={'1.3rem'} fontFamily={'Gilroy-Medium,sans-serif'} variant='subtitle1'>
                       Show all jobs
                   </Typography>
                   <UilArrowRight />
               </Link>
            }
        </Grid>
    )
}

export default Home_Latest_Jobs