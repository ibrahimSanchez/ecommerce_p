"use client";
import React, { useState } from "react";

import { Product } from "@/types/product";
import Link from "next/link";
import Image from "next/image";
import CustomImage from "@/components/images/CustomImage";
import EditProductModal from "./EditProductModal";
import { FaPencilAlt, FaRegTrashAlt } from "react-icons/fa";
import { deletedProductById } from "@/api";
import { ConfirmAction } from "@/components/modals/ConfirmAction";
import { useNotification } from "@/app/context/NotificationContext";

interface Props {
  loadAllProduct: () => void;
  item: Product;
}

const Vew2 = ({ item, loadAllProduct }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { showNotification } = useNotification();

  const [showConfirmAction, setShowConfirmAction] = useState(false);

  const deletedProduct = async () => {
    try {
      const res = await deletedProductById(item.id);
      showNotification({
        message: "Product deleted successfully.",
        error: false,
      });
    } catch (error) {
      showNotification({
        message: error.response?.data?.message || "An error occurred",
        error: true,
      });
    } finally {
      loadAllProduct();
      setShowConfirmAction(false);
    }
  };

  return (
    <>
      {showConfirmAction && (
        <ConfirmAction
          onCancel={() => setShowConfirmAction(false)}
          onConfirm={deletedProduct}
        />
      )}
      <div className="group rounded-lg bg-white shadow-1">
        <div className="flex">
          <div className="shadow-list relative overflow-hidden flex items-center justify-center max-w-[270px] w-full sm:min-h-[270px] p-4">
            <CustomImage
              src={item.imgs.previews[0]}
              alt=""
              width={250}
              height={250}
            />

            <div className="absolute left-0 bottom-0 translate-y-full w-full flex items-center justify-center gap-2.5 pb-5 ease-linear duration-200 group-hover:translate-y-0">
              <button
                className="flex items-center justify-center w-9 h-9 rounded-[5px] shadow-1 ease-out duration-200 text-dark bg-white hover:text-blue"
                onClick={() => setIsModalOpen(true)}
              >
                <FaPencilAlt />
              </button>

              <button
                className="flex items-center justify-center w-9 h-9 rounded-[5px] shadow-1 ease-out duration-200 text-dark bg-white hover:text-red"
                onClick={() => setIsModalOpen(true)}
              >
                <FaRegTrashAlt />
              </button>
            </div>
          </div>

          <div className="w-full flex flex-col gap-5 sm:flex-row sm:items-center justify-center sm:justify-between py-5 px-4 sm:px-7.5 lg:pl-11 lg:pr-12">
            <div>
              <h3 className="font-medium text-dark ease-out duration-200 hover:text-blue mb-1.5">
                <Link href="/shop-details"> {item.title} </Link>
              </h3>

              <span className="flex items-center gap-2 font-medium text-lg">
                <span className="text-dark">${item.discountedPrice}</span>
                <span className="text-dark-4 line-through">${item.price}</span>
              </span>
            </div>

            <div className="flex items-center gap-2.5 mb-2">
              <div className="flex items-center gap-1">
                {Array.from({ length: item.reviews }, (_, index) => (
                  <Image
                    key={index}
                    src="/images/icons/icon-star.svg"
                    alt="star icon"
                    width={15}
                    height={15}
                  />
                ))}
              </div>

              <p className="text-custom-sm">({item.reviews})</p>
            </div>
          </div>
        </div>

        {isModalOpen && (
          <EditProductModal
            item={item}
            onClose={() => setIsModalOpen(false)}
            loadAllProduct={loadAllProduct}
          />
        )}
      </div>
    </>
  );
};

export default Vew2;
