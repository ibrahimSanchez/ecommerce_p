import React from "react";

import { Metadata } from "next";
import { AdminOrders } from "@/components/admin/orders/AdminOrders";
export const metadata: Metadata = {
  title: "Order Page | NextCommerce Nextjs E-commerce template",
  description: "This is Order Page for NextCommerce Template",
  // other metadata
};

const OrderPage = () => {
  return (
    <>
      <AdminOrders />
    </>
  );
};

export default OrderPage;
