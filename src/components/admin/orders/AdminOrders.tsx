"use client";
import React, { useEffect, useState } from "react";
import Breadcrumb from "../../Common/Breadcrumb";
import { OrdersTable } from "@/components/Orders/OrdersTable";
import { getAllOrder } from "@/api";
import { Order } from "@/types/order";

export const AdminOrders = () => {
  const [ordersData, setOrdersData] = useState<Order[]>([]);
  const loadOrders = async () => {
    try {
      const res = await getAllOrder();
      // console.log(res.data);
      setOrdersData(res.data);
    } catch (error) {}
  };

  useEffect(() => {
    loadOrders();
  }, []);

  return (
    <>
      <section>
        <Breadcrumb title={"Manage Orders"} pages={["Admin", "/", "Orders"]} />
      </section>

      <div className="flex flex-col xl:flex-row gap-7.5 bg-gray-2 p-10">
        <div className="xl:max-w-[270px] w-full bg-white rounded-xl shadow-1">
          hola
        </div>
        <div className="px-10 w-full bg-white rounded-xl shadow-1 ">
          <OrdersTable loadOrders={loadOrders} orders={ordersData} />
        </div>
      </div>
    </>
  );
};
