import React from "react";

import { Metadata } from "next";
import AdminProducts from "@/components/admin/products/AdminProducts";
export const metadata: Metadata = {
  title: "Product Page | NextCommerce Nextjs E-commerce template",
  description: "This is Product Page for NextCommerce Template",
  // other metadata
};

const ProductPage = () => {
  return (
    <>
      <AdminProducts />
    </>
  );
};

export default ProductPage;
