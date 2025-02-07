"use client";

import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { registerUser } from "@/api";
import { CreateUser } from "@/types/user";
import Link from "next/link";

export const RegisterUserForm = () => {
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
        console.log(res);
      } catch (error) {
        console.log(
          error.response?.data?.message || "Error al registrar el usuario"
        );
      }
    }
  };

  return (
    <div className="mt-5.5">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-5">
          <label htmlFor="name" className="block mb-2.5">
            Full Name <span className="text-red">*</span>
          </label>

          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter your full name"
            className="rounded-lg border border-gray-3 bg-gray-1 placeholder:text-dark-5 w-full py-3 px-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
            {...register("name", { required: true })}
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
