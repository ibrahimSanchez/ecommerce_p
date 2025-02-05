import { Login } from "@/types/login";
import { User } from "@/types/user";
import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_URL_API_BACKEND;

// http://localhost:4000/api/auth/login
export const login = (data: Login) => {
  return axios.post(`${BASE_URL}api/auth/login`, data);
};

// http://localhost:4000/api/auth/register
export const register = (data: User) => {
  return axios.post(`${BASE_URL}api/auth/register`, data);
};
