import React from "react";
import { deletedOrder } from "@/api";
import { useNotification } from "@/app/context/NotificationContext";

export const DeletedOrder = ({ order, toggleModal, loadOrders }: any) => {
  const { id } = order;
  const { showNotification } = useNotification();
  const handleAccept = async () => {
    try {
      const res = await deletedOrder(id);

      showNotification({
        message: "Order deleted successfully.",
        error: false,
      });
    } catch (error) {
      showNotification({
        message: error.response?.data?.message || "An error occurred",
        error: true,
      });
    } finally {
      loadOrders();
      toggleModal(false);
    }
  };

  const handleCancel = () => {
    toggleModal(false);
  };

  return (
    <div className="w-full px-10">
      <p className="pb-2 font-medium text-xl text-dark">
        Are you sure you want to perform this action?
      </p>
      <div className="flex justify-between">
        <button
          onClick={handleAccept}
          className="mt-5 mx-5 w-full rounded-[10px] border border-blue-1 bg-blue-1 text-white py-3.5 px-5 text-custom-sm bg-blue-light"
        >
          Accept
        </button>
        <button
          onClick={handleCancel}
          className="mt-5 mx-5 w-full rounded-[10px] border border-blue-1 bg-blue-1 text-white py-3.5 px-5 text-custom-sm bg-red-light"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};
