export type Product = {
  title: string;
  reviews?: number;
  price: number;
  discountedPrice: number;
  id: number;
  quantity?: number;

  imgs?: {
    thumbnails: string[];
    previews: string[];
  };
};
