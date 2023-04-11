import axios from "axios";


async function fetchJobs() {

    const { data } = await axios.get( 'http://localhost:1337/api/jobs?fields=job_title,job_description&populate=employment,categories,location&populate[0]=company&populate[1]=company.Company_Logo&pagination[pageSize]=8')
    return data
}

export default fetchJobs