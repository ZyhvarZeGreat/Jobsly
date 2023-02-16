import React from 'react'
import { Grid, Stack, Box, useTheme, useMediaQuery, Typography } from '@mui/material'
import { Search_Form } from '../index'
import {bodyFont,headerFont} from '../../Reusables/constants'
const Alternate_Hero = (props) => {
  const {header,span,subtitle} = props
        const theme = useTheme()
        const query = useMediaQuery(theme.breakpoints.up('md'))
        return (
            <Grid item sx={{display:'flex',direction:'row'}} className='Jobsly_Hero' xs={11.5} md={11}>
    
                <Stack height='30rem' gap='1rem' width='100%' direction='column' alignItem='center' justifyContent='center' className='Jobsly_Hero_Details'>
    
                    <Box backgroundColor='red' display='flex' flexDirection='column' width='100%' alignItems='center' className='Jobsly_Hero_Details_Text'>
                        <Typography fontFamily={headerFont} className='Jobsly_Hero_Details_Header' variant='h2' fontSize='var(--text-4xl)' component='h1'>
                        {header}<br /> <span className='Jobsly_Hero_Details_Span'>{span}</span>
                        </Typography>
                  
                        <Typography fontFamily={bodyFont} className='Jobsly_Hero_Details_Header' variant='body1' component='p'>
                        The ideal platform for people seeking to take their careers to new heights
                        </Typography>
                    </Box>
    
                    <Box width='100%' textAlign='start' className='Jobsly_Hero_Details_Search_Form_Container' display='flex' gap='2rem' flexDirection='column' alignItems='flex-start' justifyContent='center'>
                        <Search_Form widthMax='100%' widthMin='100%' />
                        <p>Popular: UI Designer,UX Researcher,IOS Developer,Devops</p>
                    </Box>
                </Stack>
    
            </Grid>
        )
}
export default Alternate_Hero