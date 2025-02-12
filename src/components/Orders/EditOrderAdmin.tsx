import { updateOrderStatus } from "@/api";
import { useNotification } from "@/app/context/NotificationContext";
import { AccountOrder } from "@/types/order";
import React, { useState } from "react";
import toast from "react-hot-toast";

interface Props {
  order: AccountOrder;
  toggleModal: (a: boolean) => void;
  loadOrders: () => void;
}

const EditOrderAdmin = ({ order, toggleModal, loadOrders }: Props) => {
  const [currentStatus, setCurrentStatus] = useState(order?.status);

  const { showNotification } = useNotification();

  const handleChanege = (e: any) => {
    setCurrentStatus(e.target.value);
  };

  const handleSubmit = async () => {
    if (!currentStatus) {
      toast.error("Please select a status");
      return;
    }

    try {
      const res = await updateOrderStatus(order.id, currentStatus);
      showNotification({
        message: "The order was modified correctly",
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

  return (
    <>
      <div className="w-full px-10">
        <p className="pb-2 font-medium text-dark">Order Status</p>
        <div className="w-full">
          <select
            className="w-full rounded-[10px] border border-gray-3 bg-gray-1 text-dark py-3.5 px-5 text-custom-sm"
            name="status"
            id="status"
            required
            onChange={handleChanege}
            defaultValue={order?.status || "pending"}
          >
            <option value="pending">Pending</option>
            <option value="delivered">Delivered</option>
            <option value="canceled">Canceled</option>
          </select>

          <button
            className="mt-5 w-full rounded-[10px] border border-blue-1 bg-blue-1 text-white py-3.5 px-5 text-custom-sm bg-blue"
            onClick={handleSubmit}
          >
            Save Changes
          </button>
        </div>
      </div>
    </>
  );
};

export default EditOrderAdmin;
