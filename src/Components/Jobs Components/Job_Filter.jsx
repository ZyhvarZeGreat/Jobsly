import React, { useState, useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import { Checkbox, FormGroup, Stack, Typography, Accordion, FormControlLabel, AccordionSummary, AccordionDetails } from '@mui/material'
import { UilAngleDown } from '@iconscout/react-unicons'
import axios from 'axios'
import qs from 'qs'
import { bodyFont, headerFont } from '../../Reusables/constants'
const Job_Filter = ({ setCategoryFilter, categoryFilter ,setEmploymentFilter, employmentFilter,setLevelFilter, levelFilter  }) => {



  const handleChange = (e) => {
    const value = e.target.value
    const isChecked = e.target.checked
    setCategoryFilter(isChecked ? [...categoryFilter, value] : categoryFilter.filter((item) => item !== value))
    e.preventDefault()
  }


  const handleEmploymentChange = (e) => {
    const value = e.target.value
    const isChecked = e.target.checked
    setEmploymentFilter(isChecked ? [...employmentFilter, value] : employmentFilter.filter((item) => item !== value))
    e.preventDefault()
  }

  const handleLevelChange = (e) => {
    const value = e.target.value
    const isChecked = e.target.checked
    setLevelFilter(isChecked ? [...levelFilter, value] : levelFilter.filter((item) => item !== value))
    e.preventDefault()
  }

  
  const fetchCategories = async function () {
    const { data } = await axios.get(`http://localhost:1337/api/categories?fields=category_name&populate=jobs`)
    return data
  }

  const fetchEmployments = async function () {
    const { data } = await axios.get(`http://localhost:1337/api/employments?fields=employment&populate=jobs`)
    return data
  }


  const fetchLevels = async function () {
    const { data } = await axios.get(`http://localhost:1337/api/levels?fields=level&populate=jobs`)
    return data
  }


  const { data: categories, isLoading: isLoadingCategories, isError: isErrorCategories } = useQuery({
    queryFn: fetchCategories,
    queryKey: ['category1'],
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
  const { data: employments, isLoading: isLoadingEmployments, isError: isErrorEmployments } = useQuery({
    queryFn: fetchEmployments,
    queryKey: ['employments'],
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

  const { data: levels, isLoading: isLoadingLevels, isError: isErrorLevels } = useQuery({
    queryFn: fetchLevels,
    queryKey: ['levels'],
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

  if (isLoadingCategories || isLoadingEmployments || isLoadingLevels) {
    return <div> Loading</div>
  }
  if (isErrorCategories || isErrorEmployments || isErrorLevels) {
    return <div>Error...</div>
  }




  return (
    <Stack gap='1rem'>
      <Accordion sx={{ fontFamily: `${bodyFont}`, fontWeight: '600', boxShadow: 'none' }} className='Jobsly_Accordion' >
        <AccordionSummary id='panel1-header' aria-controls='panel1-content' expandIcon={<UilAngleDown />}>Categories</AccordionSummary>
        <AccordionDetails >
          {categories?.data?.map((data) => {

            return (
              <FormGroup key={data.id} sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center' }}>
                <Stack sx={{ fontFamily: `${bodyFont}` }} width='90%' alignItems='center' justifyContent='flex-start' direction='row' gap='.5rem'>
                  <FormControlLabel className='Job_Filter_Label' sx={{ color: '#a5a5a5' }} control={<Checkbox onChange={handleChange} sx={{ color: '#a5a5a5', '&Mui-checked': { color: 'var(--seconary-color)' } }} value={data.attributes.Category_Name} />} label={[data.attributes.Category_Name, ` (${data.attributes.jobs.data.length})`]} />
                </Stack>
              </FormGroup>
            )
          })}
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ fontFamily: `${bodyFont}`, fontWeight: '600', boxShadow: 'none' }} className='Jobsly_Accordion' >
        <AccordionSummary id='panel1-header' aria-controls='panel1-content' expandIcon={<UilAngleDown />}>Employment Type</AccordionSummary>
        <AccordionDetails >
          {employments?.data?.map((data) => {

            return (
              <FormGroup key={data.id} sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center' }}>
                <Stack sx={{ fontFamily: `${bodyFont}` }} width='90%' alignItems='center' justifyContent='flex-start' direction='row' gap='.5rem'>
                  <FormControlLabel className='Job_Filter_Label' sx={{ color: '#a5a5a5' }} control={<Checkbox onChange={handleEmploymentChange} sx={{ color: '#a5a5a5', '&Mui-checked': { color: 'var(--seconary-color)' } }} value={data.attributes.employment} />} label={[data.attributes.employment, ` (${data.attributes.jobs.data.length})`]} />
                </Stack>
              </FormGroup>
            )
          })}
        </AccordionDetails>
      </Accordion>



      <Accordion sx={{ fontFamily: `${bodyFont}`, fontWeight: '600', boxShadow: 'none' }} className='Jobsly_Accordion' >
        <AccordionSummary id='panel1-header' aria-controls='panel1-content' expandIcon={<UilAngleDown />}>Levels</AccordionSummary>
        <AccordionDetails >
          {levels?.data.map((data) => {

            return (
              <FormGroup key={data.id} sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center' }}>
                <Stack sx={{ fontFamily: `${bodyFont}` }} width='90%' alignItems='center' justifyContent='flex-start' direction='row' gap='.5rem'>
                  <FormControlLabel className='Job_Filter_Label' sx={{ color: '#a5a5a5' }} control={<Checkbox onChange={handleLevelChange} sx={{ color: '#a5a5a5', '&Mui-checked': { color: 'var(--seconary-color)' } }} value={data.attributes.level} />} label={[data.attributes.level, ` (${data.attributes.jobs.data.length})`]} />
                </Stack>
              </FormGroup>
            )
          })}
        </AccordionDetails>
      </Accordion>


    </Stack>
  )
}


export default Job_Filter