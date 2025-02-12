"use client";

import React, { useState } from "react";
import OrderActions from "./OrderActions";
import { AccountOrder } from "@/types/order";
import OrderModal from "./OrderModal";

interface Props {
  item: AccountOrder;
  loadOrders: () => void;
}
export const OrderItemComponent = ({ item, loadOrders }: Props) => {
  const [showDetails, setShowDetails] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [showDeleted, setShowDeleted] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const toggleEdit = () => {
    setShowEdit(!showEdit);
  };

  const toggleDeleted = () => {
    setShowDeleted(!showDeleted);
  };

  const toggleModal = (status: boolean) => {
    setShowDetails(status);
    setShowEdit(status);
    setShowDeleted(status);
  };
  return (
    <>
      <tr key={item.id} className="">
        <td className="px-4 py-2 text-red-dark">#{item.id.slice(-8)}</td>
        <td className="px-4 py-2">{item.createdAt.slice(0, 10)}</td>

        <td className="px-4 py-2">
          <p
            className={`inline-block text-custom-sm  py-0.5 px-2.5 rounded-[30px] capitalize ${
              item.status === "delivered"
                ? "text-green bg-green-light-6"
                : item.status === "canceled"
                ? "text-red bg-red-light-6"
                : item.status === "pending"
                ? "text-yellow bg-yellow-light-4"
                : "Unknown Status"
            }`}
          >
            {item.status}
          </p>
        </td>
        <td className="px-4 py-2">${item.total_amount}</td>
        <td className="px-4 py-2 flex ">
          <OrderActions
            toggleDetails={toggleDetails}
            toggleDeleted={toggleDeleted}
            toggleEdit={toggleEdit}
          />
       
        </td>
      </tr>

      <OrderModal
        showDetails={showDetails}
        showDeleted={showDeleted}
        showEdit={showEdit}
        toggleModal={toggleModal}
        order={item}
        loadOrders={loadOrders}
      />
    </>
  );
};
