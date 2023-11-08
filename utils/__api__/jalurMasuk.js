
import axios from "axios";
const BASE_API = process.env.NEXT_PUBLIC_BASE_API_URL;

export async function getJalurMasuk(params, query) {
    const response =  await axios.get(`${BASE_API}/api/jalur-masuk?page=${params.page}&per_page=${params.per_page}`)
    return response.data;
}


export async function getJalurMasukByName(params, query) {
    const response =  await axios.get(`${BASE_API}/api/jalur-masuk?page=${params.page}&per_page=${params.per_page}&name=${params.name}`)
    return response.data;
}

export async function getDetailJalurMasukBySlug(params, query) {
    const response =  await axios.get(`${BASE_API}/api/jalur-masuk/${params.slug}`)
    return response.data;
}