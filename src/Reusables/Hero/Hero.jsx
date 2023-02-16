import React from 'react'
import { Grid, Stack, Box, useTheme, useMediaQuery } from '@mui/material'
import { Search_Form } from '../index'
import hero from '../../assets/hero.png'
import './Hero.css'
const Hero = () => {
    const theme = useTheme()
    const query = useMediaQuery(theme.breakpoints.up('md'))
    return (
        <Grid item sx={{display:'flex',direction:'row'}} className='Jobsly_Hero' xs={11.5} md={11}>

            <Stack height='40rem' gap='1rem' width={query ? '50%' : '100%'} direction='column' alignItem='flex-start' justifyContent='center' className='Jobsly_Hero_Details'>

                <Box display='flex' flexDirection='column' width={query ? '70%' : '100%'} alignItems='flex-start' className='Jobsly_Hero_Details_Text'>
                    <h1 className='Jobsly_Hero_Details_Header'>Discover more  than<br /> <span className='Jobsly_Hero_Details_Span'>5000+ Jobs</span></h1>
                    <p>The ideal platform for people seeking to take their careers to new heights</p>
                </Box>

                <Box width='100%' className='Jobsly_Hero_Details_Search_Form_Container' display='flex' gap='2rem' flexDirection='column' alignItems='flex-start' justifyContent='center'>
                    <Search_Form width='60rem' />
                    <p>Popular: UI Designer,UX Researcher,IOS Developer,Devops</p>
                </Box>
            </Stack>

         { query&&<Stack  height='100%' gap='1rem' width={query ? '50%' : '100%'}>
          <Box height='40rem' width='100%'  display='flex' alignItems='center' justifyContent='center' className='Jobsly_Hero_Image'>
                <img src={hero} alt='' />
            </Box>
          </Stack>}

        </Grid>
    )
}

export default Hero