import axios from "axios";
import { axiosBaseUrl } from "../Reusables/constants";
async function fetchCategories(){
    const {data} = await axiosBaseUrl.get(`/api/categories?fields=category_name&populate=jobs,icon&pagination[pageSize]=8`).catch((err)=>{
        throw new Error(err.response.data.message)
    })
    return data
}

export default fetchCategories