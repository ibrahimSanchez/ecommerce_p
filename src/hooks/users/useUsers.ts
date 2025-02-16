import { useState, useEffect } from "react";
import { getUserAccount } from "@/api";
import { User } from "@/types/user";

export const useUsers = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const [userAccount, setUserAccount] = useState<User>();

  const loadUserAccount = async () => {
    try {
      const res = await getUserAccount();
      setUserAccount(res.data);
      // console.log(res.data)
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadUserAccount();
  }, []);

  return {
    loading,
    error,
    userAccount,
    loadUserAccount,
  };
};
