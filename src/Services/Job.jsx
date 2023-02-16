import React from 'react'
import { useQuery } from '@tanstack/react-query'
const Job = () => {
    const fetchJob = async () => {
        const response = await fetch("http://localhost:1337/api/Companies");
        return response.json
    }

    const{status,data} = useQuery({queryKey:['job'],queryFn:fetchJob})

    if (status === 'loading'){
        return <div>Loading...</div>
    }
    if (status === 'error'){
        return <div>Error</div>
    }

    console.log(data)
    return (
        <div>Job</div>
    )
}

export default Job