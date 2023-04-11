import axios from "axios";

async function fetchCategories(){
    const {data} = await axios.get('http://localhost:1337/api/categories?fields=category_name&populate=jobs,icon&pagination[pageSize]=8')
    return data
}

export default fetchCategories