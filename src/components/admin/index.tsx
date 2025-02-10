"use client";

import { useRouter } from "next/navigation";
import { FaUserCog } from "react-icons/fa";
import {
  MdOutlineFactCheck,
  MdOutlineProductionQuantityLimits,
} from "react-icons/md";
import AdminModuleCard from "./AdminModuleCard";

const AdminPanel = () => {
  const router = useRouter();

  const modules = [
    {
      title: "Users",
      description: "Manage users and permissions",
      icon: <FaUserCog />,
      onClick: () => router.push("/admin/users"),
    },
    {
      title: "Products",
      description: "Manage products",
      icon: <MdOutlineProductionQuantityLimits />,
      onClick: () => router.push("/admin/products"),
    },
    {
      title: "Orders",
      description: "Manage orders",
      icon: <MdOutlineFactCheck />,
      onClick: () => router.push("/admin/orders"),
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
      {modules.map((module, index) => (
        <AdminModuleCard key={index} {...module} />
      ))}
    </div>
  );
};

export default AdminPanel;
