"use client";

import React, { useEffect, useState } from "react";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { User } from "@/types/user";
import { getAllUsers } from "@/api";
import UserCard from "./UserCard";
import UserRoleFilter from "./UserRoleFilter";

export const AdminUsers = () => {
  const [usersData, setUsersData] = useState<User[]>([]);
  const [selectedRole, setSelectedRole] = useState("all");

  const filteredUserRole =
    selectedRole === "all"
      ? usersData
      : usersData.filter((order) => order.role === selectedRole);

  const loadUsers = async () => {
    try {
      const res = await getAllUsers();
      setUsersData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <>
      <Breadcrumb
        title={"Manage Users"}
        pages={["admin", "/", "Manage Users"]}
      />

      <div className="flex flex-col xl:flex-row gap-7.5 bg-gray-2 p-10 min-h-[350px]">
        <div className="xl:max-w-[270px] w-full">
          <UserRoleFilter
            selectedRole={selectedRole}
            onFilterChange={setSelectedRole}
          />
        </div>
        <div className="px-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2  gap-x-7.5 gap-y-9">
            {filteredUserRole.map((item) => (
              <UserCard key={item.id} item={item} loadAllUsers={loadUsers} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
