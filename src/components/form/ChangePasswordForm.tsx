"use client";

import { changeassword } from "@/api";
import { ChangePassword } from "@/types/user";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

export const ChangePasswordForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ChangePassword>();

  const onSubmit: SubmitHandler<ChangePassword> = async (data) => {
    const { newPassword, oldPassword, confirmNewPassword } = data;
    if (newPassword === confirmNewPassword) {
      try {
        const res = await changeassword({ newPassword, oldPassword });
        console.log(res);
      } catch (error) {
        console.log(
          error.response?.data?.message || "Error en el cambio de contraseña"
        );
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <p className="font-medium text-xl sm:text-2xl text-dark mb-7">
        Password Change
      </p>

      <div className="bg-white shadow-1 rounded-xl p-4 sm:p-8.5">
        <div className="mb-5">
          <label htmlFor="oldPassword" className="block mb-2.5">
            Old Password
          </label>

          <input
            type="password"
            name="oldPassword"
            id="oldPassword"
            autoComplete="on"
            className="rounded-md border border-gray-3 bg-gray-1 placeholder:text-dark-5 w-full py-2.5 px-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
            {...register("oldPassword", {
              required: true,
              minLength: 6,
              maxLength: 20,
            })}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="newPassword" className="block mb-2.5">
            New Password
          </label>

          <input
            type="password"
            name="newPassword"
            id="newPassword"
            autoComplete="on"
            className="rounded-md border border-gray-3 bg-gray-1 placeholder:text-dark-5 w-full py-2.5 px-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
            {...register("newPassword", {
              required: true,
              minLength: 6,
              maxLength: 20,
            })}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="confirmNewPassword" className="block mb-2.5">
            Confirm New Password
          </label>

          <input
            type="password"
            name="confirmNewPassword"
            id="confirmNewPassword"
            autoComplete="on"
            className="rounded-md border border-gray-3 bg-gray-1 placeholder:text-dark-5 w-full py-2.5 px-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
            {...register("confirmNewPassword", {
              required: true,
              minLength: 6,
              maxLength: 20,
            })}
          />
        </div>

        <button
          type="submit"
          className="inline-flex font-medium text-white bg-blue py-3 px-7 rounded-md ease-out duration-200 hover:bg-blue-dark"
        >
          Change Password
        </button>
      </div>
    </form>
  );
};
