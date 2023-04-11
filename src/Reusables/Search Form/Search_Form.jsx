import React from 'react'
import { Stack, Box, Grid, useTheme, useMediaQuery } from '@mui/material'
import './Search_Form.css'
import {UilSearchAlt,UilMapMarker} from '@iconscout/react-unicons'
const Search_Form = (props) => {
const {widthMax,widthMin,inputWidth,selectWidth} = props
  const theme = useTheme()
  const query = useMediaQuery(theme.breakpoints.up('md'))

  const handleSubmit = (e) => {
    e.preventDefault()
  }  
  return (
    <Stack width={query ? `${widthMax}`:`${widthMin}`} gap='2rem' alignItems='flex-start' justifyContent='space-around' className='Jobsly_Hero_Search_Form_Container' direction='row' >

      <form className='Jobsly_Hero_Search_Form'>
        <Stack alignItems='center' justifyContent='flex-start' gap={query ?'3rem':'.6rem'} direction={query ?'row':'column' }width={query ? '60%':'95%'}>
          <Box alignItems='center' gap='1rem' display='flex' justifyContent='center' className='Jobsly_Hero_Search_Form_Search_Keyword' flexDirection='row' >
            <UilSearchAlt/>
            <input className='Jobsly_Hero_Search_Input' placeholder='Job title or keyword' />
          </Box>
          <Box  display='flex'  alignItems='center' gap='1rem' className='Jobsly_Hero_Search_Form_Location' flexDirection='row' >
            <UilMapMarker/>
            <select className='Jobsly_Hero_Search_Form_Location_Select' name="Location" id="">
              <option>
                Florence, Italy
              </option>
              <option>
                Naples, Italy
              </option>
            </select>
          </Box>

        </Stack>

        <Stack width='25%' className='Jobsly_Search_Button'   alignItems='center' justifyContent='center'>
        <button className='Jobsly_Hero_Search_Form_Button'>
          <p>Search</p>
        </button>
        </Stack>
     
      </form>

    </Stack>
  )
}

export default Search_Form