import React from 'react'
import { Grid, Stack, Box, useTheme, useMediaQuery, Typography } from '@mui/material'
import { Search_Form } from '../index'
import { bodyFont,headerFont } from '../constants'
import hero from '../../assets/hero.png'
import './Hero.css'
const Hero = () => {
    const theme = useTheme()
    const query = useMediaQuery(theme.breakpoints.up('md'))
    return (
        <Grid item sx={{display:'flex',direction:'row',height:'40rem'}} className='Jobsly_Hero' xs={11.5} md={11}>

            <Stack height='30rem' gap='1rem' width={query ? '50%' : '100%'} direction='column' alignItems={query ? 'flex-start':'center'} justifyContent='center' className='Jobsly_Hero_Details'>

                <Box display='flex' flexDirection='column' width={query ? '70%' : '90%'} alignItems='flex-start'  className='Jobsly_Hero_Details_Text'>
                    <Typography variant={'h1'} className='Jobsly_Hero_Details_Header' fontFamily={headerFont} fontWeight={600} >Discover more  than<br /> <Typography variant='span' component={'span'} className='Jobsly_Hero_Details_Span'>5000+ Jobs</Typography></Typography>
                    <p>The ideal platform for people seeking to take their careers to new heights</p>
                </Box>

                <Box width='100%' className='Jobsly_Hero_Details_Search_Form_Container' display='flex' gap='2rem' flexDirection='column' alignItems={query ? 'flex-start':'center'}  justifyContent='center'>
                    <Search_Form width='60rem' />
                    <Typography textAlign={ query ? '':'center'} fontFamily={bodyFont} fontSize='1rem' variant='body1' component='p'>Popular: UI Designer,UX Researcher,IOS Developer,Devops</Typography>
                </Box>
            </Stack>

         { query&& <Stack   height='45rem' alignItems='center' justifyContent='center' gap='1rem' width={query ? '50%' : '90%'}>
          <Box height='100%'width='100%' display='flex' alignItems='center' justifyContent='center' className='Jobsly_Hero_Image'>
                <img src={hero} alt='' />
            </Box>
          </Stack>}

        </Grid>
    )
}

export default Hero