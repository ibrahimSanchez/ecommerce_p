"use client";
import { updateUserAccount } from "@/api";
import { NotificationAttributes } from "@/types/notificationAttributes";
import { User } from "@/types/user";
import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Notification from "../Notification/Notification";
import { useNotification } from "@/app/context/NotificationContext";

interface Props {
  user: User;
  closeModal: () => void;
  loadUserAccount: () => void;
}

export const ChangeUserInformationForm = ({
  user,
  closeModal,
  loadUserAccount,
}: Props) => {
  const { showNotification } = useNotification();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<User>({
    defaultValues: user,
  });

  useEffect(() => {
    reset(user);
  }, [user, reset]);

  const onSubmit: SubmitHandler<User> = async (data) => {
    try {
      const res = await updateUserAccount(data);
      showNotification({
        message: "User information modified correctly.",
        error: false,
      });

      loadUserAccount();

      closeModal();
    } catch (error) {
      showNotification({
        message: error.response?.data?.message || "An error occurred",
        error: true,
      });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col lg:flex-row gap-5 sm:gap-8 mb-5">
          <div className="w-full">
            <label htmlFor="name" className="block mb-2.5">
              firstName
            </label>

            <input
              type="text"
              name="firstName"
              className="rounded-md border border-gray-3 bg-gray-1 placeholder:text-dark-5 w-full py-2.5 px-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
              {...register("firstName")}
            />
          </div>

          <div className="w-full">
            <label htmlFor="name" className="block mb-2.5">
              LastName
            </label>

            <input
              type="text"
              name="lastName"
              className="rounded-md border border-gray-3 bg-gray-1 placeholder:text-dark-5 w-full py-2.5 px-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
              {...register("lastName")}
            />
          </div>

          <div className="w-full">
            <label htmlFor="email" className="block mb-2.5">
              Email
            </label>

            <input
              type="email"
              name="email"
              className="rounded-md border border-gray-3 bg-gray-1 placeholder:text-dark-5 w-full py-2.5 px-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
              {...register("email")}
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-5 sm:gap-8 mb-5">
          <div className="w-full">
            <label htmlFor="phone" className="block mb-2.5">
              Phone
            </label>

            <input
              type="text"
              name="phone"
              className="rounded-md border border-gray-3 bg-gray-1 placeholder:text-dark-5 w-full py-2.5 px-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
              {...register("phone")}
            />
          </div>

          <div className="w-full">
            <label htmlFor="address" className="block mb-2.5">
              Address
            </label>

            <input
              type="text"
              name="address"
              className="rounded-md border border-gray-3 bg-gray-1 placeholder:text-dark-5 w-full py-2.5 px-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
              {...register("address")}
            />
          </div>
        </div>

        <button
          type="submit"
          className="inline-flex font-medium text-white bg-blue py-3 px-7 rounded-md ease-out duration-200 hover:bg-blue-dark"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};
