import { Login } from "@/types/login";
import { ChangePassword, CreateUser, User } from "@/types/user";
import axios from "axios";
import Cookies from "js-cookie";

const BASE_URL = process.env.NEXT_PUBLIC_URL_API_BACKEND;

// http://localhost:4000/api/auth/login
export const login = (data: Login) => {
  return axios.post(`${BASE_URL}api/auth/login`, data);
};

// http://localhost:4000/api/auth/register
export const registerUser = (data: CreateUser) => {
  return axios.post(`${BASE_URL}api/auth/signup`, data);
};

// http://localhost:4000/api/auth/change-password
export const changeassword = (data: ChangePassword) => {
  const accessToken = Cookies.get("x-token");

  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };
  return axios.patch(`${BASE_URL}api/auth/change-password`, data, config);
};


// http://localhost:4000/api/auth/login
export const authGoogle = () => {
  return axios.get(`${BASE_URL}api/auth/google/login`);
};

// http://localhost:4000/api/auth/signout
export const signout = () => {
  const accessToken = Cookies.get("x-token");

  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };
  return axios.post(`${BASE_URL}api/auth/signout`,{}, config);
};
