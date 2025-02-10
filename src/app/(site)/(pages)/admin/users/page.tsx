import React from "react";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Users Page | NextCommerce Nextjs E-commerce template",
  description: "This is Users Page for NextCommerce Template",
  // other metadata
};

const UsersPage = () => {
  return (
    <>
      <div className="overflow-hidden shadow-breadcrumb pt-[209px] sm:pt-[155px] lg:pt-[95px] xl:pt-[165px]">
        <div className="border-t border-gray-3">
          <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0 py-5 xl:py-10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <h1 className="font-semibold text-dark text-xl sm:text-2xl xl:text-custom-2">
                Users Page
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UsersPage;
