import { UpdateUser } from "@/types/user";
import axios from "axios";
import Cookies from "js-cookie";

const BASE_URL = process.env.NEXT_PUBLIC_URL_API_BACKEND;

export const getUserAccount = () => {
  const accessToken = Cookies.get("x-token");

  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };

  return axios.get(`${BASE_URL}api/users/my-account`, config);
};



export const updateUserAccount = (data: UpdateUser) => {
  const accessToken = Cookies.get("x-token");

  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };

  return axios.patch(`${BASE_URL}api/users/update-my-account`, data, config);
};
