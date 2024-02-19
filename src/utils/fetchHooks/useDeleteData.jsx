import Cookies from "js-cookie";
import {BASE_URL} from "../Api";

export const deleteData = async (url, params) => {
  const config = {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  };
  const response = await BASE_URL.delete(url, params, config);
  return response;
};
