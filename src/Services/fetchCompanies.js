import axios from 'axios'
import { axiosBaseUrl } from "../Reusables/constants";
export async function fetchCompanies( ) {
const {data} = await axiosBaseUrl.get(`/api/companies?fields=Company_Name,Company_Description&populate=categories,jobs,Company_Logo&pagination[pageSize]=6`).catch((err)=>{
    throw new Error(err.response.data.message)
})
return data
}
export default  fetchCompanies