import React, { useEffect, useState } from "react";
import { getOrderByUser } from "@/api";
import { AccountOrder } from "@/types/order";
import { OrdersTable } from "./OrdersTable";

const Orders = () => {
  const [orders, setOrders] = useState<AccountOrder[]>([]);

  const loadOrders = async () => {
    try {
      const res = await getOrderByUser();
      setOrders(res.data);
    } catch (error) {}
  };

  useEffect(() => {
    loadOrders();
  }, []);

  return (
    <>
      <OrdersTable loadOrders={loadOrders} orders={orders} />
    </>
  );
};

export default Orders;
