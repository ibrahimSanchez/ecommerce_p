import { Order } from "@/types/order";
import axios from "axios";
import Cookies from "js-cookie";

const BASE_URL = process.env.NEXT_PUBLIC_URL_API_BACKEND;

export const createOrder = (data: Order) => {
  const accessToken = Cookies.get("x-token");

  const config = {
    headers: {
      Authorization: accessToken,
    },
  };

  return axios.post(`${BASE_URL}api/orders`, data, config);
};

export const getOrderByUser = () => {
  const accessToken = Cookies.get("x-token");

  const config = {
    headers: {
      Authorization: accessToken,
    },
  };

  return axios.get(`${BASE_URL}api/orders/me`, config);
};

export const getAllOrder = () => {
  const accessToken = Cookies.get("x-token");

  const config = {
    headers: {
      Authorization: accessToken,
    },
  };

  return axios.get(`${BASE_URL}api/orders/admin`, config);
};

export const updateOrderStatus = (id: string, status: string) => {
  const accessToken = Cookies.get("x-token");
  const config = {
    headers: {
      Authorization: accessToken,
    },
  };

  return axios.patch(
    `${BASE_URL}api/orders/change-status/${id}`,
    { status },
    config
  );
};

export const deletedOrder = (id: string) => {
  const accessToken = Cookies.get("x-token");

  // console.log(id)

  const config = {
    headers: {
      Authorization: accessToken,
    },
  };

  return axios.delete(`${BASE_URL}api/orders/${id}`, config);
};

// /change-status/:id
