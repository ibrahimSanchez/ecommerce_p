import React from "react";

import { Metadata } from "next";
import { AdminUsers } from "@/components/admin/users/AdminUsers";
export const metadata: Metadata = {
  title: "User Page | NextCommerce Nextjs E-commerce template",
  description: "This is User Page for NextCommerce Template",
  // other metadata
};

const UserPage = () => {
  return (
    <>
      <AdminUsers />
    </>
  );
};

export default UserPage;
