import axios from "axios";
const BASE_API = process.env.NEXT_PUBLIC_BASE_API_URL;

const login = async (payload) => {
  const response = await axios.post(`${BASE_API}/auth/auth-google`, payload);
  return response.data;
};

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
  login,
};
