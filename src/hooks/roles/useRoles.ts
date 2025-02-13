import { useState, useEffect } from "react";
import { getAllRoles } from "@/api";
import { Role } from "@/types/user";

export const useRoles = () => {
  const [allRoles, setAllRoles] = useState<Role[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadCategories = async () => {
      setLoading(true);
      try {
        const res = await getAllRoles();
        setAllRoles(res.data);
      } catch (error) {
        setError("Error loading roles");
      } finally {
        setLoading(false);
      }
    };

    loadCategories();
  }, []);

  return { allRoles, loading, error };
};
