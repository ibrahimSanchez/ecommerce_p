type OrderItem = {
  productId: number;
  quantity: number;
  price: number;
};

export type Order = {
  total_amount: number;
  arrayItems: OrderItem[];
};

export type AccountOrder = {
  total_amount: string;
  createdAt: string;
  status: string;
  id: string;
};
