import { useState, useEffect } from "react";
import { getAllCategories, getProductCountByCategory } from "@/api";
import { Category } from "@/types/category";

export const useCategories = () => {
  const [allCategories, setAllCategories] = useState<Category[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadCategories = async () => {
      setLoading(true);
      try {
        const [resAll, res] = await Promise.all([
          getAllCategories(),
          getProductCountByCategory(),
        ]);

        setAllCategories(resAll.data);
        setCategories(res.data);
      } catch (error) {
        setError("Error loading categories");
      } finally {
        setLoading(false);
      }
    };

    loadCategories();
  }, []);

  return { categories, loading, error, allCategories };
};
