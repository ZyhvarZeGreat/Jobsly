import React, { useState, useEffect } from 'react'
import { Grid, Stack, useMediaQuery, useTheme, Typography, Divider, Checkbox, Select } from '@mui/material'
import axios from 'axios'
import './Job_Info.css'
import { UilLayers, UilTable } from '@iconscout/react-unicons'
import { useQuery } from '@tanstack/react-query'
import { bodyFont, headerFont, baseUrl } from '../../Reusables/constants'
import Loader from '../../Reusables/Loader'
import loaderSkeleton from '../../Reusables/SkeletonLoader'
import ErrorHandler from '../../Reusables/ErrorHandler'
import { AppPagination } from '../../Reusables/index'
import Job_Filter from './Job_Filter'
import Job_Info_List from './Job_Info_List'
const Job_Info = () => {
  const [viewState, setViewState] = useState(3.73)
  const [categoryFilter, setCategoryFilter] = useState([])
  const [levelFilter, setLevelFilter] = useState([])
  const [employmentFilter, setEmploymentFilter] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPage, setTotalPage] = useState(1)
  const [sortValue, setSortValue] = useState('updatedAt')
  const [sortOrder, setSortOrder] = useState('asc')
  const [count, setCount] = useState(0)
  const theme = useTheme()
  const query = useMediaQuery(theme.breakpoints.up('md'))
  const categoryQuery = categoryFilter.map((filter) =>
    `&[filters][categories][Category_Name][$eq]=${filter}`
  )

  const levelQuery = levelFilter.map((filter) =>
    `&[filters][level][level][$eq]=${filter}`
  )

  const employmentQuery = employmentFilter.map((filter) =>
    `&[filters][employment][employment][$eq]=${filter}`
  )



  async function fetchAllJobs() {
    const { data } = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/jobs?fields=job_title,capacity,Salary&populate=company,employment,level,categories,location&populate[0]=company&populate[1]=company.Company_Logo&pagination[pageSize]=36`)
    return data
  }


  const handlePageChange = (e) => {
    setCurrentPage(Number(e.target.textContent))
  }


  const jobQuery = useQuery({
    queryKey: [`category`],
    queryFn: fetchAllJobs,
  })

  const { data, isLoading, isError,error } = jobQuery

 const jobCount = data?.meta?.pagination?.total
  const sortParams = [

    {
      text: 'Date Posted',
      value: 'updatedAt'
    },



    {
      text: ' Salary',
      value: 'Salary'
    },

    {
      text: 'Capacity',
      value: 'capacity'
    },

  ]

  if (isLoading) {
    return <Loader/>
  }
  if (isError) {
    return <ErrorHandler />
  }

  // console.log(data.meta.pagination.total)

  return (
    <Grid marginBottom='3rem' marginTop={query ? '' : '2rem'} xs={12} container justifyContent='space-between' className='Jobsly_Jobs_Info_Container'>
      <Stack gap='.4rem' height='8rem' alignItems='center' className='Jobsly_Job_Info_Header' width='100%' justifyContent='space-between' direction={query ? 'row' : 'column'}>
        <Stack direction={query ? 'column' : 'row'} alignItems={query ? '' : 'center'} gap={query ? '' : '2rem'} >
          <Typography fontFamily={headerFont} fontWeight='500' fontSize={query ? 'var(--text-3xl)' : ''} variant='h3' component='h4'>
            All Jobs
          </Typography>

          <Typography fontFamily={bodyFont} fontWeight='400' color='var(--footer-alt-text-color)' variant='body1' component='p'>
            Showing {jobCount} results
          </Typography>
        </Stack>

        <Stack alignItems='center' gap='1rem' width={query ? ' 50%' : '100%'} marginRight='2.8rem' direction={'row'} justifyContent='flex-end' className='Jobsly_Job_Info_Sort'>
          <Typography variant='body1' fontFamily={bodyFont} fontWeight='500' color='var(--footer-alt-text-color)' component='p'>
            Sort by:
          </Typography>

          <form>

            <select onChange={(e) => { setSortValue(e.target.value), console.log(e.target.value) }} style={{ width: '9rem',backgroundColor:'transparent', height: '2.2rem', fontFamily: `${bodyFont}`, fontWeight: '500', border: 'none',borderBottom:'1px solid #e5e5e5', fontSize: 'var(--text-base)' }} placeholder={sortParams[0]}>
              {/*     DATA CAN BE SORTED ACCORDING TO THE HIGHEST PAY,DATE POSTED,VACANCY */}
              {
                sortParams.map((params) => {
                  return (
                    <option key={params.text} value={params.value}>
                      <Typography variant='body2' component='span'>
                        {params.text}
                      </Typography>
                    </option>
                  )
                })
              }


              {/* MAKE THIS PART DYNAMIC ACCORDING TO THE SORTED STATE */}
            </select>
          </form>

          <select onChange={(e) => { setSortOrder(e.target.value) }} style={{ width: '9rem',backgroundColor:'transparent', height: '2.2rem', fontFamily: `${bodyFont}`, fontWeight: '500', border: 'none', borderBottom:'1px solid #e5e5e5',  fontSize: 'var(--text-base)' }} placeholder={sortParams[0]}>
            <option value='asc'>Ascending</option>
            <option value='desc'>Descending</option>
          </select>


          {
            query && <Stack alignItems='center' color='var(--secondary-color)' justifyContent='center' direction='row' gap='1rem' className='Jobsly_Info_View'>
              <button onClick={() => setViewState(3.73)} style={{ border: 'none', backgroundColor: 'transparent', cursor: 'pointer' }}>
                <UilTable fill='var(--secondary-color)' stroke='.4rem' />
              </button>
              <button onClick={() => setViewState(12)} style={{ border: 'none', backgroundColor: 'transparent', cursor: 'pointer' }}>
                <UilLayers fill='var(--secondary-color)' stroke='.4rem' />
              </button>
            </Stack>}
        </Stack>
      </Stack>

      <Grid item sx={{ overflowY: 'scroll' }} className='Jobsly_Jobs_Filter' xs={12} md={3}>
        <Job_Filter setCategoryFilter={setCategoryFilter} categoryFilter={categoryFilter} setLevelFilter={setLevelFilter} levelFilter={levelFilter} setEmploymentFilter={setEmploymentFilter} employmentFilter={employmentFilter} />
      </Grid>
      {/* HOW DO I GET THE DATA REQUIRED TO FILTER THE JOB INFO DATA */}


      <Job_Info_List handlePageChange={handlePageChange} sortOrder={sortOrder} sortValue={sortValue} currentPage={currentPage} setCurrentPage={setCurrentPage} totalPage={totalPage} setTotalPage={setTotalPage} count={count} setCount={setCount} categoryQuery={categoryQuery} viewState={viewState} employmentQuery={employmentQuery} levelQuery={levelQuery} />


      <Grid xs={12} backgroundColor='' height='6rem' container alignItems='center' justifyContent='center'>
        <AppPagination font={bodyFont} page={currentPage} onChange={handlePageChange} count={totalPage} />
      </Grid>
    </Grid>
  )
}

export default Job_Info