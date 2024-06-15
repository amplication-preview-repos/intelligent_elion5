import { Category } from "../category/Category";

export type Product = {
  category?: Category | null;
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  price: number | null;
  updatedAt: Date;
};
