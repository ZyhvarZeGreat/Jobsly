import axios from "axios";
import { baseUrl } from "../Reusables/constants";
async function fetchCategories(){
    console.log(baseUrl)
    const {data} = await axios.get(`${baseUrl}/api/categories?fields=category_name&populate=jobs,icon&pagination[pageSize]=8`).catch((err)=>{
        throw new Error(err.response.data.message)
    })
    return data
}

export default fetchCategories