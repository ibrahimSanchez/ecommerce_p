export type Product = {
  title: string;
  reviews?: number;
  price: number;
  discountedPrice: number;
  id: string;
  quantity?: number;
  categoryId?: string;
  description?: string;

  imgs?: {
    thumbnails: string[];
    previews: string[];
  };
};
