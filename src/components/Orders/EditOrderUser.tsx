import { updateOrderStatus } from "@/api";
import { AccountOrder } from "@/types/order";
import React, { useState } from "react";
import toast from "react-hot-toast";

interface Props {
  order: AccountOrder;
  toggleModal: (a: boolean) => void;
  loadOrders: () => void;
}

const EditOrderUser = ({ order, toggleModal, loadOrders }: Props) => {
  const [currentStatus, setCurrentStatus] = useState(order?.status);
  const handleChanege = (e: any) => {
    setCurrentStatus(e.target.value);
  };

  const handleSubmit = async () => {
    if (!currentStatus) {
      toast.error("Please select a status");
      return;
    }

    try {
      const res = await updateOrderStatus(order.id, "canceled");
    } catch (error) {
    } finally {
      loadOrders();
      toggleModal(false);
    }
  };

  return (
    <div className="w-full px-10">
      <p className="pb-2 font-medium text-dark">Order Status</p>
      <div className="w-full">
        <select
          className="w-full rounded-[10px] border border-gray-3 bg-gray-1 text-dark py-3.5 px-5 text-custom-sm"
          name="status"
          id="status"
          required
          disabled
          onChange={handleChanege}
          defaultValue={order?.status || "pending"}
        >
          <option value="canceled">Canceled</option>
        </select>

        <button
          className="mt-5 w-full rounded-[10px] border border-blue-1 bg-blue-1 text-white py-3.5 px-5 text-custom-sm bg-blue"
          onClick={handleSubmit}
          disabled={order.status === "canceled" || order.status === "delivered"}
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default EditOrderUser;
