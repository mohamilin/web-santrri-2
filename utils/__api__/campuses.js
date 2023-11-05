import axios from "axios";
const BASE_API = process.env.NEXT_PUBLIC_BASE_API_URL;

const getCampuses = async (params, query) => {
  const response = await axios.get(
    `${BASE_API}/api/kampus?page=${params.page}&per_page=${params.per_page}`
  );
  return response.data;
};

const getCampusesByNameCategory = async (params) => {
  const response = await axios.get(
    `${BASE_API}/api/kampus?page=${params.page}&per_page=${params.per_page}&name=${params.name}&category=${params?.category}`
  );
  return response.data;
};

const getCampusesBySlug = async (params) => {
  const response = await axios.get(
    `${BASE_API}/api/kampus/${params?.slug}`
  );
  return response.data;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getCampuses,
  getCampusesByNameCategory,
  getCampusesBySlug
};
