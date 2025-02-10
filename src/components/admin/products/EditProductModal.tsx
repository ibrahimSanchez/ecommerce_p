"use client";
import React, { useEffect, useState } from "react";
import { Product } from "@/types/product";
import { MdOutlineClose } from "react-icons/md";
import { SubmitHandler, useForm } from "react-hook-form";
import { updateProductById } from "@/api";
import { NotificationAttributes } from "@/types/notificationAttributes";
import Notification from "@/components/notification/Notification";

interface Props {
  item: Product;
  onClose: () => void;
  loadAllProduct: () => void;
}

const EditProductModal = ({ item, onClose, loadAllProduct }: Props) => {
  const [showNotification, setShowNotification] = useState(false);
  const [notificationAttributes, setNotificationAttributes] =
    useState<NotificationAttributes>({
      message: "",
      error: false,
    });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Product>();

  const onSubmit: SubmitHandler<Product> = async (data) => {
    try {
      const res = await updateProductById(item.id, data);
      loadAllProduct();
      setNotificationAttributes({
        message: "Product successfully modified",
        error: false,
      });
      setShowNotification(true);

      setTimeout(() => {
        onClose();
      }, 2500);
    } catch (error) {
      setNotificationAttributes({
        message: error.response?.data?.message || "An error occurred",
        error: true,
      });
      setShowNotification(true);
    }
  };

  useEffect(() => {
    reset(item);
  }, [item, reset]);


  const convertImage = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === "string") {
          console.log("Base64 Image:", reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      {showNotification && (
        <Notification
          notificationAttributes={notificationAttributes}
          onClose={() => setShowNotification(false)}
        />
      )}
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-99999">
        <div className="bg-white rounded-lg shadow-lg w-96">
          <div className="w-full flex justify-end p-1">
            <button className="cursor-pointer" onClick={onClose}>
              <MdOutlineClose size={30} />
            </button>
          </div>

          <div className="px-6 pb-6">
            <h2 className="text-xl font-bold mb-4">Edit Product</h2>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="overflow-auto max-h-[400px]"
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

              {/* Quantity */}
              <div className="mb-5">
                <label htmlFor="quantity" className="block mb-2.5">
                  Quantity
                </label>
                <input
                  type="number"
                  id="quantity"
                  placeholder="Enter quantity"
                  className="rounded-lg border border-gray-300 bg-gray-100 w-full py-3 px-5 outline-none focus:ring-2 focus:ring-blue/20"
                  {...register("quantity")}
                />
              </div>

              {/* Category ID */}
              {/* <div className="mb-5">
              <label htmlFor="categoryId" className="block mb-2.5">
                Category ID
              </label>
              <input
                type="text"
                id="categoryId"
                placeholder="Enter category ID"
                className="rounded-lg border border-gray-300 bg-gray-100 w-full py-3 px-5 outline-none focus:ring-2 focus:ring-blue/20"
                {...register("categoryId")}
              />
            </div> */}

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

              {/* Image Upload (Previews) */}
              <div className="mb-5">
                <label className="block mb-2.5">Upload Image (Previews)</label>
                <input
                  type="file"
                  accept="image/*"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  onChange={convertImage}
                />
              </div>

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
      </div>
    </>
  );
};

export default EditProductModal;
