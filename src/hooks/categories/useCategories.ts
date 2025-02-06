import { useState, useEffect } from "react";
import { getProductCountByCategory } from "@/api"; 
import { Category } from "@/types/category"; 

export const useCategories = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadAllCategories = async () => {
      setLoading(true);
      try {
        const res = await getProductCountByCategory(); 
        setCategories(res.data);
      } catch (error) {
        setError("Error loading categories");
      } finally {
        setLoading(false);
      }
    };

    loadAllCategories();
  }, []);

  return { categories, loading, error };
};

// products
//title
//id