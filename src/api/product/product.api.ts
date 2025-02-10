import axios from "axios";
import Cookies from "js-cookie";
import { Product } from "@/types/product";

const BASE_URL = process.env.NEXT_PUBLIC_URL_API_BACKEND;

export const getAllProduct = () => {
  return axios.get(`${BASE_URL}api/products`);
};

export const updateProductById = (id: string, data: Product) => {
  const accessToken = Cookies.get("x-token");

  console.log(data.imgs);

  const config = {
    headers: {
      Authorization: accessToken,
    },
  };
  // return axios.patch(`${BASE_URL}api/products/${id}`, data, config);
  return {};
};
