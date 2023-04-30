import React from 'react'
import { PaginationItem, Pagination, Box } from '@mui/material'
const AppPagination = ({count,font,page,onChange}) => {
    return (

        <Box justifyContent='center' alignItems='center' width='100%' display='flex'>
            <Pagination hideNextButton hidePrevButton page={page} onChange={onChange} className='Jobsly_Jobs_List_Pagination' shape={'rounded'}  variant='text' count = {count}/>
        </Box>

    )
}

export default AppPagination