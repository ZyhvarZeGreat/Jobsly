import axios from "axios";
import { baseUrl } from "../Reusables/constants";
async function fetchCategories(){
    console.log(baseUrl)
    const {data} = await axios.get(`${baseUrl}/categories?fields=category_name&populate=jobs,icon&pagination[pageSize]=8`)
    return data
}

export default fetchCategories