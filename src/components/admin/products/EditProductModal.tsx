"use client";
import React, { useEffect, useState } from "react";
import { Product, ProductImage } from "@/types/product";
import { MdOutlineClose } from "react-icons/md";
import { SubmitHandler, useForm } from "react-hook-form";
import { updateProductById, uploadAllProductImages } from "@/api";
import { ProductImageForm } from "@/components/form/ProductImageForm";
import { buildImages } from "@/helper";
import { useCategories } from "@/hooks";
import { useNotification } from "@/app/context/NotificationContext";

interface Props {
  item: Product;
  onClose: () => void;
  loadAllProduct: () => void;
}

const EditProductModal = ({ item, onClose, loadAllProduct }: Props) => {
  const { allCategories, error, loading } = useCategories();
  const { showNotification } = useNotification();

  const [files, setFiles] = useState<ProductImage>({
    previews: [],
    thumbnails: [],
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Product>({
    defaultValues: item,
  });

  useEffect(() => {
    reset(item);
  }, [item, reset]);

  const onSubmit: SubmitHandler<Product> = async (data) => {
    try {
      if (files.previews.length > 0 || files.thumbnails.length > 0) {
        const uploadRes = await uploadAllProductImages(files);
        if (uploadRes) {
          data.imgs = buildImages(uploadRes);
        }
      }
      await updateAction(data);
    } catch (error) {
      showNotification({
        message: error.response?.data?.message || "An error occurred",
        error: true,
      });
    }
  };

  const updateAction = async (data) => {
    try {
      await updateProductById(item.id, data);
      loadAllProduct();
      showNotification({ message: "Changes updated successfully.", error: false });

      onClose();
    } catch (error) {
      showNotification({
        message: error.response?.data?.message || "An error occurred",
        error: true,
      });
    }
  };

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-[#000] bg-opacity-70 z-9999">
        <div className="bg-white rounded-lg shadow-lg w-96">
          <div className="w-full flex justify-end p-2">
            <button className="cursor-pointer" onClick={onClose}>
              <MdOutlineClose size={30} />
            </button>
          </div>

          <div className="px-6 pb-6">
            <h2 className="text-xl font-bold mb-4">Edit Product</h2>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="overflow-auto max-h-[400px] px-6 pb-6"
          >
            {/* Title */}
            <div className="mb-5">
              <label htmlFor="title" className="block mb-2.5">
                Title
              </label>
              <input
                type="text"
                id="title"
                placeholder="Enter title"
                className="rounded-lg border border-gray-300 bg-gray-100 w-full py-3 px-5 outline-none focus:ring-2 focus:ring-blue/20"
                {...register("title")}
              />
            </div>

            {/* Reviews */}
            <div className="mb-5">
              <label htmlFor="reviews" className="block mb-2.5">
                Reviews
              </label>
              <input
                type="number"
                id="reviews"
                placeholder="Enter reviews count"
                className="rounded-lg border border-gray-300 bg-gray-100 w-full py-3 px-5 outline-none focus:ring-2 focus:ring-blue/20"
                {...register("reviews", { max: 5, min: 1 })}
              />
            </div>

            {/* Price */}
            <div className="mb-5">
              <label htmlFor="price" className="block mb-2.5">
                Price
              </label>
              <input
                type="number"
                step="0.01"
                id="price"
                placeholder="Enter price"
                className="rounded-lg border border-gray-300 bg-gray-100 w-full py-3 px-5 outline-none focus:ring-2 focus:ring-blue/20"
                {...register("price")}
              />
            </div>
            {/* Discounted Price */}
            <div className="mb-5">
              <label htmlFor="discountedPrice" className="block mb-2.5">
                Discounted Price
              </label>
              <input
                type="number"
                step="0.01"
                id="discountedPrice"
                placeholder="Enter discounted price"
                className="rounded-lg border border-gray-300 bg-gray-100 w-full py-3 px-5 outline-none focus:ring-2 focus:ring-blue/20"
                {...register("discountedPrice")}
              />
            </div>

            {/* Category */}
            <div className="mb-5">
              <label htmlFor="categoryId" className="block mb-2.5">
                Category
              </label>
              <select
                id="categoryId"
                className="rounded-lg border border-gray-300 bg-gray-100 w-full py-3 px-5 outline-none focus:ring-2 focus:ring-blue/20"
                {...register("categoryId")}
                disabled={loading}
                defaultValue={item.categoryId}
              >
                {/* <option value="">Select a category</option> */}
                {allCategories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.title}
                  </option>
                ))}
              </select>
              {error && <p className="text-red-500 mt-2">{error}</p>}
            </div>

            {/* Description */}
            <div className="mb-5">
              <label htmlFor="description" className="block mb-2.5">
                Description
              </label>
              <textarea
                id="description"
                placeholder="Enter product description"
                className="rounded-lg border border-gray-300 bg-gray-100 w-full py-3 px-5 outline-none focus:ring-2 focus:ring-blue/20"
                {...register("description")}
              />
            </div>

            {/* Image Upload */}
            <ProductImageForm files={files} setFiles={setFiles} />

            <div className="flex justify-end gap-2 mt-4">
              <button
                className="bg-blue-light text-white px-4 py-2 rounded"
                type="submit"
              >
                Save
              </button>
              <button
                className="bg-red-light text-white px-4 py-2 rounded"
                onClick={onClose}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditProductModal;
