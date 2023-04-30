import React from 'react'
import { Grid, Stack, Box, Skeleton, Typography, useMediaQuery, useTheme } from '@mui/material'
import { fetchCompanies } from '../../Services/fetchCompanies'
import { bodyFont, headerFont } from '../../Reusables/constants'
import { useQuery } from '@tanstack/react-query'
import './Recommended_Jobs.css'
import Recommended_Companies_Card from './Recommended_Companies_Card'
import { baseUrl,subHeadingFontSize } from '../../Reusables/constants'
import Loader from '../../Reusables/Loader'
const Recommended_Companies = () => {

    const theme = useTheme()
    const query = useMediaQuery(theme.breakpoints.up('md'))
    const { data, isError, isLoading } = useQuery({
        queryKey: ['companies'],
        queryFn: fetchCompanies,
        onError:(error) => {
            if(error.response.status === 401){
                console.log('You are not Authorized')
            }
            else if(error.response.status === 403){
                console.log('You are Forbidden')
            }
            else if(error.response.status === 404){
                console.log('Item not found')
            }
            else if(error.response.status === 500){
                console.log('Internal Server Error')
            }
            
            else if(error.isAxiosError && error.response.status === undefined){
                console.log('CORS error occured')
            }
            else{
                console.log(error)
            }
            }
    })

    if (isLoading) {
        return <Loader/>
    }

    if (isError) {
        return <div>Error</div>
    }
    return (
        <Grid xs={11} container >
            <Grid xs={12} container className='Jobsly_Recommended_Companies_Header'>

                <Stack height={query ? '8rem':'9rem'}>
                    <Typography fontSize={subHeadingFontSize} fontFamily={headerFont} variant='h3' component='h2'>
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
                            return (
                                <Recommended_Companies_Card key={Company_Name} Company_Name={Company_Name} Company_Logo={Company_Logo} categories={categories} bodyFont={bodyFont} jobs={jobs} Company_Description={Company_Description} imgUrl={imgUrl} />
                            )
                        })
                    }
                </Grid>

            </Grid>
        </Grid>
    )
}

export default Recommended_Companies