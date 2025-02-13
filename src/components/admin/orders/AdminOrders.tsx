"use client";
import React, { useEffect, useState } from "react";
import Breadcrumb from "../../Common/Breadcrumb";
import { getAllOrder } from "@/api";
import { AccountOrder } from "@/types/order";
import { OrdersTableComponent } from "@/components/Orders/OrdersTableComponent";
import OrderStatusFilter from "@/components/Orders/OrderStatusFilter";

export const AdminOrders = () => {
  const [ordersData, setOrdersData] = useState<AccountOrder[]>([]);
  const [selectedStatus, setSelectedStatus] = useState("all");

  const filteredOrders =
    selectedStatus === "all"
      ? ordersData
      : ordersData.filter((order) => order.status === selectedStatus);

  const loadOrders = async () => {
    try {
      const res = await getAllOrder();
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

      <div className="flex flex-col xl:flex-row gap-7.5 bg-gray-2 p-10 min-h-[350px]">
        <div className="xl:max-w-[270px] w-full rounded-xl">
          <OrderStatusFilter
            selectedStatus={selectedStatus}
            onFilterChange={setSelectedStatus}
          />
        </div>
        <div className="px-10 w-full bg-white rounded-xl shadow-1 ">
          <OrdersTableComponent
            orders={filteredOrders}
            loadOrders={loadOrders}
          />
        </div>
      </div>
    </>
  );
};
