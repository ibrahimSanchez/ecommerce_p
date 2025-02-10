"use client";

import { useForm } from "react-hook-form";
import React from "react";
import { uploadProductImage } from "@/api";

const UsersPage = () => {
  const { register, handleSubmit } = useForm();

  // Maneja el envío del formulario
  const handleSubmitForm = async (data: any) => {
    console.log(data);

    // Crea un objeto FormData para enviar los archivos
    const formData = new FormData();
    
    // Iteramos sobre todos los archivos seleccionados
    for (let i = 0; i < data.file.length; i++) {
      formData.append('file', data.file[i]); // Se añaden los archivos al FormData
    }

    // Aquí puedes llamar a tu API para subir las imágenes
    // const res = await uploadProductImage(formData); 

    // console.log(res);
  };

  return (
    <>
      <div className="overflow-hidden shadow-breadcrumb pt-[209px] sm:pt-[155px] lg:pt-[95px] xl:pt-[165px]">
        <div className="border-t border-gray-3">
          <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0 py-5 xl:py-10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <h1 className="font-semibold text-dark text-xl sm:text-2xl xl:text-custom-2">
                Users Page
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Formulario con useForm */}
      <form className="h-screen" onSubmit={handleSubmit(handleSubmitForm)}>
        <input
          name="file"
          type="file"
          accept="image/*"
          multiple // Permite la selección de múltiples archivos
          {...register("file", { required: true })}  // Registro del campo de archivo
        />

        <button
          type="submit"
          className="m-5 bg-red-light p-3 rounded-md text-blue-light-5"
        >
          Subir
        </button>
      </form>
    </>
  );
};

export default UsersPage;
