import axios from "axios";
import { baseUrl } from "../Reusables/constants";

async function fetchJobs() {

    const { data } = await axios.get( `${baseUrl}/jobs?fields=job_title,job_description&populate=employment,categories,location&populate[0]=company&populate[1]=company.Company_Logo&pagination[pageSize]=8`).catch((err)=>{
        throw new Error(err.response.data.message)
    })
    return data
}

export default fetchJobs