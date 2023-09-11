import { PaginationResult } from "@/types/types";
import { ProductsArr } from "@/lib/models/ProductModel";
import { TagsArr } from "@/lib/models/TagModel";

export interface ProductListSlugProps extends PaginationResult<ProductsArr> {
  tags: TagsArr;
}
