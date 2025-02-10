import Image from "next/image";
import React from "react";
import { FaPlusCircle } from "react-icons/fa";

export const AddProduct = () => {
  return (
    <>
      <div className="group">
        <div className="relative overflow-hidden flex items-center justify-center md:min-h-[270px] mb-4">
          <FaPlusCircle size={50} className="text-blue cursor-pointer" />
        </div>
      </div>
    </>
  );
};
