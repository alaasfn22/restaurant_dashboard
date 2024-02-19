import {BASE_URL} from "../Api";
export const getData = async (url, params) => {
  const response = await BASE_URL.get(url, params);
  return response;
};
