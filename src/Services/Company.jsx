import {useQuery} from '@tanstack/react-query'

export default function company (){


    const fetchCompany = async ()=>{
        const response = await fetch(process.env.REACT_APP_BASE_URL + 'Companies');
        return response.json();
    }

    const {status,data,error} = useQuery({queryKey:["company"],queryFn:fetchCompany})


    if(status === "loading"){
        return<span>Loading...</span>
    }

    if(status === "error"){
        return<span>error</span>
    }
    console.log(data)   
    return(
        <ul>
   
        </ul>
    )
}