import React, { useState, useRef, useCallback,useEffect } from 'react'
import { Grid, Stack, Box, Typography, useTheme, useMediaQuery } from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import {  axiosBaseUrl,baseUrl, bodyFont, headerFont, subHeadingFontSize } from '../../Reusables/constants'
import Loader from '../../Reusables/Loader'
import axios from 'axios'

import qs from 'qs'
import Company_Categories_Card from './Company_Categories_Cards'
import './Company_Categories.css'
import ErrorHandler from '../../Reusables/ErrorHandler'

const Company_Categories = () => {

    const [companyFilter, setCompanyFilter] = useState('')
    const textRef = useRef(null)
    const fetchCategories = async () => {
        const data = await axiosBaseUrl.get(`/api/categories?fields=Category_Name`)
        return data
    }

    const categoryQuery = useQuery({
        queryFn: fetchCategories,
        queryKey: ['categories', 1],
    })



    const { data, isLoading, isError, refetch ,error} = categoryQuery


    const handleClick = (item,e) => {
        const filter = item.attributes.Category_Name
        setCompanyFilter(filter)
        refetch()
    }

  
    if (isLoading) {
        return <Loader/>
    }
    if (isError) {
        return <ErrorHandler message={error.message}/>
    }

    return (
        <Grid xs={11} container alignItems='center' justifyContent='center'>
            <Grid xs={12} container gap='2rem' alignItems='center' className='Jobsly_Company_Categories_Header' justifyContent='flex-start'>
                <Typography fontSize={subHeadingFontSize} variant='h3' component='h3' fontFamily={headerFont} fontWeight={600}>
                    Companies by Category
                </Typography>

                <Grid xs={12} sx={{ overflowX: 'scroll', scrollSnapAlign: 'center', scrollBehavior: 'smooth', scrollSnapType: 'x' }} container direction='row' className='Jobsly_Company_Categories_Items'>
                    <Stack gap='2rem' direction={'row'} className='Jobsly_Company_Categories_Items_Container'>
                        {data.data.data.map((data) => {
                            return (
                                <Stack key={data.id} onClick={() => handleClick(data)} alignItems='center' justifyContent='center' className='Jobsly_Company_Categories_Item' width='21rem' height='14rem'>
                                    <Stack justifyContent='center' direction='column' gap='2rem' height='90%' width='90%' >
                                        icon
                                        <Typography ref={textRef} variant='h4' component='h4' fontFamily={headerFont} fontWeight={500}>
                                            {data.attributes.Category_Name}
                                        </Typography>
                                    </Stack>
                                </Stack>
                            )
                        })}
                    </Stack>
                </Grid>
              
                <Company_Categories_Card filter={companyFilter} />
            </Grid>



        </Grid>
    )
}

export default Company_Categories