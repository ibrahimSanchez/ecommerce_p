import { Order } from "@/types/order";
import axios from "axios";
import Cookies from "js-cookie";

const BASE_URL = process.env.NEXT_PUBLIC_URL_API_BACKEND;

export const createOrder = (data: Order) => {
  const accessToken = Cookies.get("x-token");

  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };

  return axios.post(`${BASE_URL}api/orders`, data, config);
};

export const getOrder = () => {
  const accessToken = Cookies.get("x-token");

  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };

  return axios.get(`${BASE_URL}api/orders`, config);
};
