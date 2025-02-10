import { Order, OrderStatus } from "@/types/order";
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

export const getOrderByUser = () => {
  const accessToken = Cookies.get("x-token");

  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };

  return axios.get(`${BASE_URL}api/orders/me`, config);
};

export const getAllOrder = () => {
  const accessToken = Cookies.get("x-token");

  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };

  return axios.get(`${BASE_URL}api/orders/admin`, config);
};

export const updateOrderStatus = (data: OrderStatus) => {
  const accessToken = Cookies.get("x-token");
  const { id } = data;

  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };

  return axios.patch(`${BASE_URL}api/orders/change-status/${id}`, data, config);
};

// /change-status/:id
