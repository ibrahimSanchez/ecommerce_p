import axios from "axios";
import Cookies from "js-cookie";
import { Product, ProductImage } from "@/types/product";

const BASE_URL = process.env.NEXT_PUBLIC_URL_API_BACKEND;

export const getAllProduct = () => {
  return axios.get(`${BASE_URL}api/products`);
};

export const createProduct = (data: Product) => {
  const accessToken = Cookies.get("x-token");

  const config = {
    headers: {
      Authorization: accessToken,
    },
  };
  // data.categoryId = '1'
  return axios.post(`${BASE_URL}api/products`, data, config);
};

export const updateProductById = (id: string, data: Product) => {
  const accessToken = Cookies.get("x-token");

  const config = {
    headers: {
      Authorization: accessToken,
    },
  };
  return axios.patch(`${BASE_URL}api/products/${id}`, data, config);
};

export const deletedProductById = (id: string) => {
  const accessToken = Cookies.get("x-token");

  const config = {
    headers: {
      Authorization: accessToken,
    },
  };
  return axios.delete(`${BASE_URL}api/products/${id}`, config);
};

//TODO: for images
export const uploadProductImage = (data) => {
  return axios.post(`${BASE_URL}api/file/upload`, data);
};
export const uploadAllProductImages = async (productImages: ProductImage) => {
  const createFormDataArray = (images: string[]) =>
    images.map((image) => {
      const formData = new FormData();
      formData.append("file", image);
      return formData;
    });

  const thumbnailsFormDataArray = createFormDataArray(productImages.thumbnails);
  const previewsFormDataArray = createFormDataArray(productImages.previews);

  try {
    const thumbnailsRes = await Promise.allSettled(
      thumbnailsFormDataArray.map((formData) => uploadProductImage(formData))
    );

    const previewsRes = await Promise.allSettled(
      previewsFormDataArray.map((formData) => uploadProductImage(formData))
    );

    const successfulThumbnails = thumbnailsRes
      .filter((res) => res.status === "fulfilled")
      .map((res: any) => res.value);

    const successfulPreviews = previewsRes
      .filter((res) => res.status === "fulfilled")
      .map((res: any) => res.value);

    return {
      thumbnailsRes: successfulThumbnails,
      previewsRes: successfulPreviews,
    };
  } catch (error) {
    console.error("Error subiendo imágenes:", error);
    return null;
  }
};
