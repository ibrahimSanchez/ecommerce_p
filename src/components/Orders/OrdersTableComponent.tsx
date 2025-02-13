import React from "react";
import { AccountOrder } from "@/types/order";
import { OrderItemComponent } from "./OrderItemComponent";
import SingleOrder from "./SingleOrder";

interface Props {
  orders: AccountOrder[];
  loadOrders: () => void;
}

export const OrdersTableComponent = ({ orders, loadOrders }: Props) => {
  return (
    <div>
      {orders.length === 0 ? (
        <p className="py-9.5 px-4 sm:px-7.5 xl:px-10">
          You don&apos;t have any orders!
        </p>
      ) : (
        <div className="hidden md:flex">
          <table className="table-auto w-full mt-4 ">
            <thead className="bg-background-primary text-text-base  border-b">
              <tr>
                <th className="px-4 py-2 text-left">Order</th>
                <th className="px-4 py-2 text-left">Date</th>
                <th className="px-4 py-2 text-left">Status</th>
                <th className="px-4 py-2 text-left">Total</th>
                <th className="px-4 py-2 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((item) => (
                <OrderItemComponent
                  key={item.id}
                  item={item}
                  loadOrders={loadOrders}
                />
              ))}
            </tbody>
          </table>
        </div>
      )}
      {orders.length > 0 &&
        orders.map((orderItem, key) => (
          <SingleOrder
            key={key}
            orderItem={orderItem}
            smallView={true}
            loadOrders={loadOrders}
          />
        ))}
    </div>
  );
};
