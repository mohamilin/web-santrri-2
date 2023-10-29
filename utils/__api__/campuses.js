import axios from "axios";
const BASE_API = process.env.NEXT_PUBLIC_BASE_API_URL;

export async function getCampuses(params, query) {
  const response = await axios.get(`${BASE_API}/api/kampus?page=${params.page}&per_page=${params.per_page}`);
  return response.data;
};
