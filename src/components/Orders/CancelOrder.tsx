import { updateOrderStatus } from "@/api";
import React from "react";

export const CancelOrder = ({ order, toggleModal, loadOrders }: any) => {
  // console.log(order);

  const handleAccept = async () => {
    try {
      const res = await updateOrderStatus(order.id, "canceled");
      console.log(res);
    } catch (error) {
      console.log(error);
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
