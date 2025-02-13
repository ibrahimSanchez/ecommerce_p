"use client";
import React, { useEffect, useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useNotification } from "@/app/context/NotificationContext";
import { User } from "@/types/user";
import { useRoles } from "@/hooks";
import { getRoleText } from "@/helper/getRoleText";
import { updateUser } from "@/api";

interface Props {
  item: User;
  onClose: () => void;
  loadAllUsers: () => void;
}

const EditUserModal = ({ item, onClose, loadAllUsers }: Props) => {
  const { showNotification } = useNotification();

  const { allRoles, error, loading } = useRoles();

  const {
    register,
    handleSubmit,
    setValue,
    control,
    reset,
    formState: { errors },
  } = useForm<User>({
    defaultValues: item,
  });

  useEffect(() => {
    reset(item);
    setValue("role", item.role);
  }, [item, reset, setValue]);

  const onSubmit: SubmitHandler<User> = async (data) => {
    try {
      await updateUser(data);
      loadAllUsers();
      showNotification({
        message: "Changes updated successfully.",
        error: false,
      });

      onClose();
    } catch (error) {
      showNotification({
        message: error.response?.data?.message || "An error occurred",
        error: true,
      });
    }
  };

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-[#000] bg-opacity-70 z-9999">
        <div className="bg-white rounded-lg shadow-lg w-96">
          <div className="w-full flex justify-end p-2">
            <button className="cursor-pointer" onClick={onClose}>
              <MdOutlineClose size={30} />
            </button>
          </div>

          <div className="px-6 pb-6">
            <h2 className="text-xl font-bold mb-4">Edit User</h2>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="overflow-auto max-h-[400px] px-6 pb-6"
          >
            {/* name */}
            <div className="mb-5">
              <label htmlFor="name" className="block mb-2.5">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter name"
                className="rounded-lg border border-gray-300 bg-gray-100 w-full py-3 px-5 outline-none focus:ring-2 focus:ring-blue/20"
                {...register("name")}
              />
            </div>

            {/* email */}
            <div className="mb-5">
              <label htmlFor="email" className="block mb-2.5">
                Email
              </label>
              <input
                type="text"
                id="email"
                placeholder="Enter reviews count"
                className="rounded-lg border border-gray-300 bg-gray-100 w-full py-3 px-5 outline-none focus:ring-2 focus:ring-blue/20"
                {...register("email")}
              />
            </div>

            {/* Phone */}
            <div className="mb-5">
              <label htmlFor="phone" className="block mb-2.5">
                Phone
              </label>
              <input
                type="number"
                step="0.01"
                id="phone"
                placeholder="Enter price"
                className="rounded-lg border border-gray-300 bg-gray-100 w-full py-3 px-5 outline-none focus:ring-2 focus:ring-blue/20"
                {...register("phone")}
              />
            </div>
            {/* Address */}
            <div className="mb-5">
              <label htmlFor="address" className="block mb-2.5">
                Address
              </label>
              <input
                type="text"
                step="0.01"
                id="discountedPrice"
                placeholder="Enter discounted price"
                className="rounded-lg border border-gray-300 bg-gray-100 w-full py-3 px-5 outline-none focus:ring-2 focus:ring-blue/20"
                {...register("address")}
              />
            </div>

            {/* role */}
            <div className="mb-5">
              <label htmlFor="role" className="block mb-2.5">
                Role
              </label>
              <Controller
                name="role"
                control={control} 
                defaultValue={item.role || ""}
                render={({ field }) => (
                  <select
                    {...field}
                    className="rounded-lg border border-gray-300 bg-gray-100 w-full py-3 px-5 outline-none focus:ring-2 focus:ring-blue/20"
                    disabled={loading}
                  >
                    {allRoles.map((i) => (
                      <option key={i.id} value={i.role}>
                        {getRoleText(i.role)}
                      </option>
                    ))}
                  </select>
                )}
              />
              {error && <p className="text-red-500 mt-2">{error}</p>}
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
    </>
  );
};

export default EditUserModal;
