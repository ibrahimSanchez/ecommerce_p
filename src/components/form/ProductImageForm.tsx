"use client";

import { ProductImage } from "@/types/product";
import { useState } from "react";

interface Props {
  setFiles: (file: ProductImage) => void;
  files: ProductImage;
}

export const ProductImageForm = ({ files, setFiles }: Props) => {
  const handleChangeThumbnails = (e) => {
    const newFiles: [] = e.target.files;

    setFiles({ ...files, thumbnails: [...files.thumbnails, ...newFiles] });
  };

  const handleChangePreviews = (e) => {
    const newFiles: [] = e.target.files;

    setFiles({ ...files, previews: [...files.previews, ...newFiles] });
  };

  return (
    <>
      <div className="mb-5">
        <label className="block mb-2.5">Upload Image (Previews)</label>
        <input
          type="file"
          name="file Previews"
          multiple
          accept="image/*"
          className="w-full p-2 border border-gray-300 rounded-lg"
          onChange={handleChangePreviews}
        />
      </div>

      <div className="mb-5">
        <label className="block mb-2.5">Upload Image (thumbnails)</label>
        <input
          type="file"
          name="file thumbnails"
          multiple
          accept="image/*"
          className="w-full p-2 border border-gray-300 rounded-lg"
          onChange={handleChangeThumbnails}
        />
      </div>
    </>
  );
};
