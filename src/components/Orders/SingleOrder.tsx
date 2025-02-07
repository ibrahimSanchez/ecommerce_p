import React, { useState } from "react";
import OrderActions from "./OrderActions";
import OrderModal from "./OrderModal";

const SingleOrder = ({ orderItem, smallView, loadOrders }: any) => {
  const [showDetails, setShowDetails] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [showCancel, setShowCancel] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const toggleEdit = () => {
    setShowEdit(!showEdit);
  };

  const toggleCancel = () => {
    setShowCancel(!showCancel);
  };

  const toggleModal = (status: boolean) => {
    setShowDetails(status);
    setShowEdit(status);
    setShowCancel(status);
  };

  return (
    <>
      {!smallView && (
        <div className="items-center justify-between border-t border-gray-3 py-5 px-7.5 hidden md:flex">
          <div className="min-w-[111px]">
            <p className="text-custom-sm text-red">#{orderItem.id.slice(-8)}</p>
          </div>
          <div className="min-w-[175px]">
            <p className="text-custom-sm text-dark">
              {orderItem.createdAt.slice(0, 10)}
            </p>
          </div>

          <div className="min-w-[128px]">
            <p
              className={`inline-block text-custom-sm  py-0.5 px-2.5 rounded-[30px] capitalize ${
                orderItem.status === "delivered"
                  ? "text-green bg-green-light-6"
                  : orderItem.status === "canceled"
                  ? "text-red bg-red-light-6"
                  : orderItem.status === "pending"
                  ? "text-yellow bg-yellow-light-4"
                  : "Unknown Status"
              }`}
            >
              {orderItem.status}
            </p>
          </div>

          <div className="min-w-[113px]">
            <p className="text-custom-sm text-dark">
              ${orderItem.total_amount}
            </p>
          </div>

          <div className="flex gap-5 items-center">
            <OrderActions
              orderStatus={orderItem.status}
              toggleDetails={toggleDetails}
              toggleEdit={toggleEdit}
              toggleCancel={toggleCancel}
            />
          </div>
        </div>
      )}

      {smallView && (
        <div className="block md:hidden">
          <div className="py-4.5 px-7.5">
            <div className="">
              <p className="text-custom-sm text-dark">
                <span className="font-bold pr-2"> Order:</span> #
                {orderItem.id.slice(-8)}
              </p>
            </div>
            <div className="">
              <p className="text-custom-sm text-dark">
                <span className="font-bold pr-2">Date:</span>{" "}
                {orderItem.createdAt}
              </p>
            </div>

            <div className="">
              <p className="text-custom-sm text-dark">
                <span className="font-bold pr-2">Status:</span>{" "}
                <span
                  className={`inline-block text-custom-sm  py-0.5 px-2.5 rounded-[30px] capitalize ${
                    orderItem.status === "delivered"
                      ? "text-green bg-green-light-6"
                      : orderItem.status === "canceled"
                      ? "text-red bg-red-light-6"
                      : orderItem.status === "pending"
                      ? "text-yellow bg-yellow-light-4"
                      : "Unknown Status"
                  }`}
                >
                  {orderItem.status}
                </span>
              </p>
            </div>

            <div className="">
              <p className="text-custom-sm text-dark">
                <span className="font-bold pr-2">Title:</span> {orderItem.id}
              </p>
            </div>

            <div className="">
              <p className="text-custom-sm text-dark">
                <span className="font-bold pr-2">Total:</span> $
                {orderItem.total_amount}
              </p>
            </div>

            <div className="">
              <p className="text-custom-sm text-dark flex items-center">
                <span className="font-bold pr-2">Actions:</span>{" "}
                <OrderActions
                orderStatus={orderItem.status}
                  toggleDetails={toggleDetails}
                  toggleEdit={toggleEdit}
                  toggleCancel={toggleCancel}
                />
              </p>
            </div>
          </div>
        </div>
      )}

      <OrderModal
        showDetails={showDetails}
        showEdit={showEdit}
        showCancel={showCancel}
        toggleModal={toggleModal}
        order={orderItem}
        loadOrders={loadOrders}
      />
    </>
  );
};

export default SingleOrder;
