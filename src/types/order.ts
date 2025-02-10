type OrderItem = {
  productId: string;
  quantity: number;
  price: number;
};

export type Order = {
  total_amount: number;
  delivery_address: string;
  arrayItems: OrderItem[];
};

export type AccountOrder = {
  total_amount: string;
  delivery_address: string;
  createdAt: string;
  status: string;
  id: string;
};

export type OrderStatus = {
  id: string;
  status: string;
};
