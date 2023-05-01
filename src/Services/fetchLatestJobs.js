import axios from 'axios'
import { axiosBaseUrl } from "../Reusables/constants";
async function fetchLatestJobs() {
    const { data } = await axiosBaseUrl.get(`/api/jobs?fields=job_title,job_description&populate=employment,categories,location,levels&populate[0]=company&populate[1]=company.Company_Logo&sort=id:desc&pagination[pageSize]=8`).catch((err)=>{
        throw new Error(err.response.data.message)
    })
    return data
}

export default fetchLatestJobs