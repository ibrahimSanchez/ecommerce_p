import { useState, useEffect } from "react";
import { Product } from "@/types/product";
import { getAllProduct } from "@/api";

export const useProducts = () => {
  const [shopData, setShopData] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

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

  return { shopData, loading, error };
};
