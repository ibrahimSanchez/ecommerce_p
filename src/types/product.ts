export type Product = {
  title: string;
  reviews?: number;
  price: number;
  discountedPrice: number;
  id: number;
  quantity?: number;
  categoryId?: string;

  imgs?: {
    thumbnails: string[];
    previews: string[];
  };
};
