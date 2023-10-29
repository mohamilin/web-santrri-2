import axios from "axios";
const BASE_API = process.env.NEXT_PUBLIC_BASE_API_URL;

import { getCampuses } from "./campuses";
import { getScholars } from "./scholarships";

const  getHomepage = async (params, query = null) =>  {
  const [campuses, scholarships] = await Promise.all([
    getCampuses(params, query),
    getScholars(params, query),
  ]);
  return { campuses, scholarships };
}


// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getHomepage
}