import axios from "axios"
export const headerFont = 'Clash Display Semibold,sans-serif'
export const bodyFont = 'Gilroy-Regular,sans-serif'
export const subHeadingFontSize = 'clamp(1.8rem,5vw,2.3rem)'
export const heroFontSize = 'clamp(3rem,5vw,4rem)'
export const baseUrl =  import.meta.env.VITE_BASE_URL


export const axiosBaseUrl = axios.create({
baseURL: baseUrl,
headers:{
    Authorization: import.meta.env.VITE_STRAPI_API_KEY
}})
