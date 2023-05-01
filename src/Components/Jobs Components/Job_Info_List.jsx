import React, { useEffect } from 'react'
import { Grid } from '@mui/material'
import Job_Info_Card from './Job_Info_Card'
import Loader from '../../Reusables/Loader'
import axios from 'axios'
import ErrorHandler from '../../Reusables/ErrorHandler'
import { useState } from 'react'

import { bodyFont, headerFont, baseUrl } from '../../Reusables/constants'
import { useQuery } from '@tanstack/react-query'

const Job_Info_List = (props) => {
  const { categoryQuery, employmentQuery, viewState, levelQuery, count, handlePageChange, setCount, currentPage, setCurrentPage, totalPage, setTotalPage,sortOrder,sortValue } = props
    const [pagination, setPagination] = useState(8)
    const viewChange = viewState < 12
    
    async function fetchAllJobs() {
        const { data } = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/jobs?fields=job_title,capacity&populate=company,employment,level,categories,location&populate[0]=company&populate[1]=company.Company_Logo&sort[0]=${sortValue}:${sortOrder}&pagination[limit]=9&pagination[withCount]=true&pagination[start]=${(currentPage - 1) * 10}${categoryQuery}${levelQuery}${employmentQuery}`)
        return data

    }


    const jobQuery = useQuery({
        queryKey: [`[${categoryQuery},${levelQuery}.${employmentQuery},${currentPage},${sortValue},${sortOrder}]`],
        queryFn: fetchAllJobs
    })

    const { data, isLoading, isError, error } = jobQuery

    if (isLoading) {
        return <Grid xs={12} height='100%'> <Loader /> </Grid>
    }
    if (isError) {
        return <ErrorHandler />
    }
    if (data.data.length === 0) {
        return <ErrorHandler />
    }

    

    setCount(data?.data?.length)
    setTotalPage(Math.floor(data?.meta?.pagination?.total/ 9))
    // console.log(Math.floor(data?.meta?.pagination?.total/ 9))

  

    return (
        <Grid xs={12} className='Jobsly_Info_Container' gap='2rem' md={8.8} overflow='scroll' height={'45rem'} container alignItems='flex-start' justifyContent={viewChange ? 'flex-start' : 'flex-start'}>
            {data?.data?.map((details, index) => {
                const { Job_Title, categories, company, employment, level, location, capacity, id } = details?.attributes
                const companyName = company?.Company_Name
                const jobCapacity = capacity
                const jobCategory = categories?.data[0]?.attributes?.Category_Name
                const jobLevel = level?.data?.attributes?.level
                const jobLocation = location?.data?.attributes?.head_office
                const jobEmploymentType = employment?.data?.attributes.employment
                const logo = company?.data.attributes.Company_Logo.data.attributes.url

                return (
                    <>
                        {data === null && <ErrorHandler />}
                        {isError ? <div key={index}>error</div> ? isLoading : <Loader key={id} /> : <Job_Info_Card key={id} viewChange={viewChange} view={viewState} capacity={jobCapacity} title={Job_Title} logo={logo} company={companyName} level={jobLevel} location={jobLocation} category={jobCategory} employment={jobEmploymentType} />}
                    </>

                )
            })
            }
        </Grid>
    )
}

export default Job_Info_List