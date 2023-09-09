import { PaginationResult } from "@/types/types";
import { ProductsArr } from "@/lib/models/ProductModel";

export interface ProductListProps extends PaginationResult<ProductsArr> {}
