import axios from 'axios'

export async function fetchCompanies( ) {
const {data} = await axios.get('http://localhost:1337/api/companies?fields=Company_Name,Company_Description&populate=categories,jobs,Company_Logo&pagination[pageSize]=6')
return data
}
export default  fetchCompanies