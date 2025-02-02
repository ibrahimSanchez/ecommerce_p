import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_URL_API_BACKEND;

export const getAllCategories = async () => {
  return axios.get(`${BASE_URL}api/categories`);
};

export const getProductCountByCategory = async () => {
  return axios.get(`${BASE_URL}api/productCategories`);
};
