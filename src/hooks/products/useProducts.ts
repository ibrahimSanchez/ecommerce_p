import { useState, useEffect } from "react";
import { Product } from "@/types/product";
import { getAllProduct } from "@/api";

export const useProducts = () => {
  const [shopData, setShopData] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [categoriesId, setCategoriesId] = useState<string[]>([]);

  useEffect(() => {
    const loadAllProduct = async () => {
      setLoading(true);
      try {
        const res = await getAllProduct();
        setShopData(res.data);
      } catch (error) {
        setError("Error loading products");
      } finally {
        setLoading(false);
      }
    };

    loadAllProduct();
  }, []);

  const addCategoriesId = (id: string) => {
    setCategoriesId([...categoriesId, id]);
  };

  const removeCategoriesId = (id: string) => {
    let categories = categoriesId;
    categories = categories.filter((item) => item != id);
    setCategoriesId(categories);
  };

  return {
    shopData,
    loading,
    error,
    categoriesId,
    addCategoriesId,
    removeCategoriesId,
  };
};
