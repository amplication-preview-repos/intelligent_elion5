import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";

export type ProductCreateInput = {
  category?: CategoryWhereUniqueInput | null;
  description?: string | null;
  name?: string | null;
  price?: number | null;
};
