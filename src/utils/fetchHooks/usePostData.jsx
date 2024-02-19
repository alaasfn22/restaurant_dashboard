import Cookies from "js-cookie";
import {BASE_URL} from "../Api";
export const postData = async (url, params) => {
  const response = await BASE_URL.post(url, params);
  return response;
};

export const postDataWithToken = async (url, params) => {
  const config = {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  };
  const response = await BASE_URL.post(url, params, config);
  return response;
};
