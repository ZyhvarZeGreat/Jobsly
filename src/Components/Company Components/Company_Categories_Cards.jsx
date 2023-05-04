import React from 'react'
import { Grid, Stack, Box, Typography, useTheme, useMediaQuery, CircularProgress, Skeleton } from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import {UilArrowRight} from '@iconscout/react-unicons'
import { axiosBaseUrl,baseUrl, bodyFont, headerFont, subHeadingFontSize } from '../../Reusables/constants'
import Loader from '../../Reusables/Loader'
import axios from 'axios'
import qs from 'qs'
import { Link } from 'react-router-dom'
import ErrorHandler from '../../Reusables/ErrorHandler'

// FROM THE UI DESIGN I SEE THE DATA I NEED IS THE AMOUNT AND INFO  OF COMPANIES THAT BELONG TO THE CATEGORY OF THE CLICKED TAB
// WHAT CAN I DO TO GET THE DATA?
//OK I GOT THE DATA BY MAPPING THROUGH THE CATEGORIES ENDPOINT AND GETTING THE SPECIFIC CATEGORY NAME , THEN USING THAT TO FILTER THE REQUESTS SUCH THAT THE COMPANIES RETURNED IN TH RESPONSE IS FILTERED ACCORDING TO THE CATEGORY NAME


const Company_Categories_Card = ({ filter }) => {
    const filterParam = `&[filters][Category_Name][$eq]=${filter}`

    const fetchCardData = async () => {
        const { data } = await axiosBaseUrl.get(`/api/categories?populate[0]=company&populate[1]=company.Company_Logo,company.jobs${filter === '' ? '' : filterParam}`)
        return data
    }

    const cardData = useQuery({
        queryFn: fetchCardData,
        queryKey: [`${filter}`],
    })





    // console.log(filter === '' ? filterParam : '')
    // console.log(filterParam)

    const { data, isLoading, isError,error } = cardData
    if (isLoading) {
        return <Loader />
    }
    if (isError) {
        return <ErrorHandler message={error.message}/>
    }

   
    const resultCount = data?.data[0]?.attributes?.company?.data?.length
    return (
        <Grid container xs={12} gap='3rem' alignItems='center' justifyContent='center' className='Jobsly_Company_Categories_Card_Container'>
            <Stack width='100%' alignItems='flex-start' justifyContent='flex-start'>
                <Typography variant='h4' component='h4' fontSize={subHeadingFontSize} fontFamily={headerFont} fontWeight={600} >
                    {resultCount > 0 ? resultCount : '0'} {resultCount === 0 && resultCount > 0 ? 'Result' : 'Results'}
                </Typography>
            </Stack>
            {
                isLoading ? <Skeleton /> : <Grid xs={12} container direction='row' gap='2rem' alignItems='flex-start' justifyContent='flex-start'  className='Jobsly_Company_Categories_Card_Item_Container'>
                    {data?.data[0]?.attributes?.company.data?.map((data) => {

                        return (

                            <Grid xs={12} md={5.7} lg={3.7} gap='2rem' border='1px solid #e5e5e5' container alignItems='center' justifyContent='center' height='15rem' className='Jobsly_Company_Categories_Card_Item_Container'>
                                {isLoading ? <CircularProgress /> : <Stack alignItems='center' gap='1rem' justifyContent='center' height='90%' width='90%'>
                                    <Box height='4rem' width='9rem'>
                                        <img style={{ width: '100%', height: '100%' }} src={`${baseUrl}${data?.attributes?.Company_Logo?.data?.attributes?.url}`} />
                                    </Box>
                                    <Typography variant='h4' component='h4' fontSize='1.8rem' fontFamily={headerFont} fontWeight={500} >
                                        {data?.attributes?.Company_Name}
                                    </Typography>

                                    <Box display='flex' alignItems='center' justifyContent='center' height='2rem' width='6rem' borderRadius='20px' backgroundColor='var(--crypto-text-color)'>
                                        <Typography fontFamily={bodyFont} variant='body1' color='var(--secondary-color)' component='p'>
                                            {data?.attributes?.jobs?.data?.length} {data?.attributes?.jobs?.data?.length > 0 && data?.attributes?.jobs?.data?.length === 0 ? ' job' : 'jobs'}
                                        </Typography>
                                    </Box>
                                </Stack>}
                            </Grid>

                        )
                    })}

                </Grid>}


            <Stack height='6rem' alignItems='flex-start' width='100%'  justifyContent='center'>
                <Link style={{display:'flex', alignItems:'center' , justifyContent:'center',color:'var(--secondary-color)', fontSize: '1.3rem', fontFamily: `${bodyFont}` }} to='/'> Show more {filter} jobs  <UilArrowRight/> </Link>
            </Stack>

        </Grid>
    )
}

export default Company_Categories_Card