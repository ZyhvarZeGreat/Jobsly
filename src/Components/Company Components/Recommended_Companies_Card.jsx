import React from 'react'
import { Grid, Stack, Box, Typography } from '@mui/material'
import { headerFont } from '../../Reusables/constants'
const Recommended_Companies_Card = ({ Company_Name, jobs, Company_Description, categories, bodyFont,imgUrl }) => {

    return (

        <Grid  xs={12} lg={3.9} md={5.9} item >
            <Stack border='1px solid #e5e5e5' alignItems='center' height='18rem' width='95%'>

                <Stack width='90%' height='95%' justifyContent='center'>
                    <Stack direction='row' height='25%' alignItems='flex-end' justifyContent='space-between'>
                        <Box width='8rem' height='3rem' display='flex' alignItems='center' justifyContent='flex-start' className='Jobsly_Recommended_Companies_Image_Container'>
                            <img className='Jobsly_Recommended_Companies_Image' src={`${import.meta.env.VITE_BASE_URL}${imgUrl}`} alt='' />
                        </Box>
                        <Box height='2rem' borderRadius='20px' backgroundColor='var(--crypto-text-color)' color='var(--secondary-color)' display='flex' alignItems='center' justifyContent='center' width='5rem' >
                            <Typography variant='body1' fontFamily={bodyFont} component='p'>
                                {jobs.data.length} {jobs?.data?.length > 1 || jobs?.data?.length === 0 ? 'jobs' : 'job'}
                            </Typography>
                        </Box>
                    </Stack>


                    <Stack direction='column' height='75%' gap='.3rem' alignItems='flex-start' justifyContent='center'>
                        <Typography variant='h4' fontFamily={headerFont} fontWeight={500} component='h4'>
                            {Company_Name}
                        </Typography>

                        <Typography variant='body1' fontFamily={bodyFont} component='p'>
                            {Company_Description?.substring(0, 151)}...
                        </Typography>
                    </Stack>

                    <Stack alignItems='center' justifyContent='center' width='8rem' height='2.1rem' borderRadius='20px' className={`${categories?.data[0]?.attributes?.Category_Name}`}>
                        <Typography fontFamily={bodyFont} variant='body1' component='p'>
                            {categories?.data[0]?.attributes?.Category_Name}
                        </Typography>
                    </Stack>

                </Stack>
            </Stack>
        </Grid>
    )
}

export default Recommended_Companies_Card