import React from "react";
import Unauthorized from "@/components/Unauthorized";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Error Page | NextCommerce Nextjs E-commerce template",
  description: "This is Error Page for NextCommerce Template",
  // other metadata
};

const UnauthorizedPage = () => {
  return (
    <main>
      <Unauthorized />
    </main>
  );
};

export default UnauthorizedPage;
