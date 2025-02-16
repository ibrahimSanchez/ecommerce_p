"use client";

import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { registerUser } from "@/api";
import { CreateUser } from "@/types/user";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useNotification } from "@/app/context/NotificationContext";

export const RegisterUserForm = () => {
  const router = useRouter();

  const { showNotification } = useNotification();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateUser>();

  const onSubmit: SubmitHandler<CreateUser> = async (data) => {
    const { confirmPassword, password } = data;
    if (password === confirmPassword) {
      try {
        const res = await registerUser(data);

        console.log(res)
        showNotification({
          message: "Successfully created user account.",
          error: false,
        });

        // router.push("/auth/signin");
      } catch (error) {
        showNotification({
          message: error.response?.data?.message || "An error occurred",
          error: true,
        });
      }
    }
  };

  return (
    <div className="mt-5.5">
      <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-5">
          <label htmlFor="firstName" className="block mb-2.5">
            First Name <span className="text-red">*</span>
          </label>

          <input
            type="text"
            name="firstName"
            id="firstName"
            placeholder="Enter your First Name"
            className="rounded-lg border border-gray-3 bg-gray-1 placeholder:text-dark-5 w-full py-3 px-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
            {...register("firstName", { required: true })}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="lastName" className="block mb-2.5">
            last Name <span className="text-red">*</span>
          </label>

          <input
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Enter your Last Name"
            className="rounded-lg border border-gray-3 bg-gray-1 placeholder:text-dark-5 w-full py-3 px-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
            {...register("lastName", { required: true })}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="block mb-2.5">
            Email Address <span className="text-red">*</span>
          </label>

          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email address"
            className="rounded-lg border border-gray-3 bg-gray-1 placeholder:text-dark-5 w-full py-3 px-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
            {...register("email", { required: true })}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="password" className="block mb-2.5">
            Password <span className="text-red">*</span>
          </label>

          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
            autoComplete="on"
            className="rounded-lg border border-gray-3 bg-gray-1 placeholder:text-dark-5 w-full py-3 px-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
            {...register("password", {
              required: true,
              minLength: 6,
              maxLength: 20,
            })}
          />
        </div>

        <div className="mb-5.5">
          <label htmlFor="re-type-password" className="block mb-2.5">
            Re-type Password <span className="text-red">*</span>
          </label>

          <input
            type="password"
            name="re-type-password"
            id="re-type-password"
            placeholder="Re-type your password"
            autoComplete="on"
            className="rounded-lg border border-gray-3 bg-gray-1 placeholder:text-dark-5 w-full py-3 px-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
            {...register("confirmPassword", {
              required: true,
              minLength: 6,
              maxLength: 20,
            })}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="block mb-2.5">
            Phone 
          </label>

          <input
            type="phone"
            name="phone"
            id="phone"
            placeholder="Enter your phone"
            className="rounded-lg border border-gray-3 bg-gray-1 placeholder:text-dark-5 w-full py-3 px-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
            {...register("phone")}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="block mb-2.5">
            Address 
          </label>

          <input
            type="address"
            name="address"
            id="address"
            placeholder="Enter your address"
            className="rounded-lg border border-gray-3 bg-gray-1 placeholder:text-dark-5 w-full py-3 px-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
            {...register("address")}
          />
        </div>

        <button
          type="submit"
          className="w-full flex justify-center font-medium text-white bg-dark py-3 px-6 rounded-lg ease-out duration-200 hover:bg-blue mt-7.5"
        >
          Create Account
        </button>

        <p className="text-center mt-6">
          Already have an account?
          <Link
            href="/auth/signin"
            className="text-dark ease-out duration-200 hover:text-blue pl-2"
          >
            Sign in Now
          </Link>
        </p>
      </form>
    </div>
  );
};
