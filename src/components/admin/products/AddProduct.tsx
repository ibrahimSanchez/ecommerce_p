"use client";
import React, { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import CreateProductModal from "./CreateProductModal";

interface Props {
  loadAllProduct: () => void;
}

export const AddProduct = ({ loadAllProduct }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <div className="group">
        <div className="relative overflow-hidden flex items-center justify-center md:min-h-[270px] mb-4">
          <button onClick={() => setIsModalOpen(true)}>
            <FaPlusCircle size={50} className="text-blue cursor-pointer" />
          </button>
        </div>
      </div>

      {isModalOpen && (
        <CreateProductModal
          onClose={() => setIsModalOpen(false)}
          loadAllProduct={loadAllProduct}
        />
      )}
    </>
  );
};
