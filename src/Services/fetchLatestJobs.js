import axios from 'axios'
import { baseUrl } from "../Reusables/constants";
async function fetchLatestJobs() {
    const { data } = await axios.get(`${baseUrl}/api/jobs?fields=job_title,job_description&populate=employment,categories,location,levels&populate[0]=company&populate[1]=company.Company_Logo&sort=id:desc&pagination[pageSize]=8`).catch((err)=>{
        throw new Error(err.response.data.message)
    })
    return data
}

export default fetchLatestJobs