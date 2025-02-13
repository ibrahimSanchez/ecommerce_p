import { UpdateUser, User } from "@/types/user";
import axios from "axios";
import Cookies from "js-cookie";

const BASE_URL = process.env.NEXT_PUBLIC_URL_API_BACKEND;

export const getUserAccount = () => {
  const accessToken = Cookies.get("x-token");

  const config = {
    headers: {
      Authorization: accessToken,
    },
  };

  return axios.get(`${BASE_URL}api/users/my-account`, config);
};

export const updateUserAccount = (data: UpdateUser) => {
  const accessToken = Cookies.get("x-token");

  const config = {
    headers: {
      Authorization: accessToken,
    },
  };

  return axios.patch(`${BASE_URL}api/users/update-my-account`, data, config);
};

export const getAllUsers = () => {
  const accessToken = Cookies.get("x-token");

  const config = {
    headers: {
      Authorization: accessToken,
    },
  };

  return axios.get(`${BASE_URL}api/users/get-all`, config);
};

export const updateUser = (data: User) => {
  const accessToken = Cookies.get("x-token");
  const { id } = data;

  const config = {
    headers: {
      Authorization: accessToken,
    },
  };

  return axios.patch(`${BASE_URL}api/users/update-user/${id}`, data, config);
};

export const deleteUserById = (id: string) => {
  const accessToken = Cookies.get("x-token");

  const config = {
    headers: {
      Authorization: accessToken,
    },
  };

  return axios.delete(`${BASE_URL}api/users/delete-user/${id}`, config);
};



export const getAllRoles = () => {
  const accessToken = Cookies.get("x-token");

  const config = {
    headers: {
      Authorization: accessToken,
    },
  };

  return axios.get(`${BASE_URL}api/users/get-roles/`, config);

}