import axios from "axios";


async function fetchJobs() {

    const { data } = await axios.get('http://localhost:1337/api/jobs?fields=job_title,job_description&populate=employments,categories,locations&populate[0]=companies&populate[1]=companies.Company_Logo&pagination[pageSize]=8')
    return data
}

export default fetchJobs