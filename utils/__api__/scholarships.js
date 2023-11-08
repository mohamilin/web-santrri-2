
import axios from "axios";
const BASE_API = process.env.NEXT_PUBLIC_BASE_API_URL;

export async function getScholars(params, query) {
    const response =  await axios.get(`${BASE_API}/api/scholarships?page=${params.page}&per_page=${params.per_page}`)
    return response.data;
}

export async function getScholarsByName(params, query) {
    const response =  await axios.get(`${BASE_API}/api/scholarships?page=${params.page}&per_page=${params.per_page}&&name=${params.name}`)
    return response.data;
}

export async function getDetailScholarsBySLug(params) {
    const response =  await axios.get(`${BASE_API}/api/scholarships/${params.slug}`)
    return response.data;
}