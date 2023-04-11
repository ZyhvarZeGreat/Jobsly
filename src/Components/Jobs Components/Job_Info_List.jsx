import React from 'react'
import { Grid } from '@mui/material'
import Job_Info_Card from './Job_Info_Card'
import Loader from '../../Reusables/Loader'
import axios from 'axios'
import { useState } from 'react'
import { bodyFont, headerFont, baseUrl } from '../../Reusables/constants'
import { useQuery } from '@tanstack/react-query'
const Job_Info_List = ({ categoryQuery, employmentQuery,viewState, levelQuery }) => {

    const [pagination, setPagination] = useState(8)
    const viewChange = viewState < 12
    async function fetchAllJobs() {
        const { data } = await axios.get(`${baseUrl}jobs?fields=job_title,capacity&populate=company,employment,level,categories,location&populate[0]=company&populate[1]=company.Company_Logo&pagination[pageSize]=36${categoryQuery}${levelQuery}${employmentQuery}`)
        return data
    }


    const jobQuery = useQuery({
        queryKey: [`[${categoryQuery},${levelQuery}.${employmentQuery}]`],
        queryFn: fetchAllJobs
    })

    const { data, isLoading, isError } = jobQuery

    if (isLoading) {
        return <Grid xs={12} height='100%'> <Loader /> </Grid>
    }
    if (isError) {
        return <div>error</div>
    }
    if (data === null) {
        return <div>error</div>
    }


    return (
        <Grid xs={12} className='Jobsly_Info_Container' gap='2rem' md={8.8} overflow='scroll' height={'45rem'} container alignItems='flex-start' justifyContent={viewChange ? 'flex-start' : 'flex-start'}>
            {data?.data?.map((details) => {
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
                        {isError ? <div key={id}>error</div> ? isLoading : <Loader key={id} /> :  <Job_Info_Card key={id} viewChange={viewChange} view={viewState} capacity={jobCapacity} title={Job_Title} logo={logo} company={companyName} level={jobLevel} location={jobLocation} category={jobCategory} employment={jobEmploymentType} />}
                    </>

                )
            })
            }

        </Grid>
    )
}

export default Job_Info_List