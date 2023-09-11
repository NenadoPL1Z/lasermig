import { axiosProject } from "@/lib/http";
import { ApiNamespace } from "@/lib/constants/namespaces/ApiNamespace";
import { TagsArr } from "@/lib/models/TagModel";
import { PaginationResult } from "@/types/types";
import { ProductsArr } from "@/lib/models/ProductModel";

export interface FetchGetCategoryResponse {
  category_tags: TagsArr;
  products: PaginationResult<ProductsArr>;
}

export const fetchGetCategory = (slug: string) => {
  return axiosProject
    .get<FetchGetCategoryResponse>(ApiNamespace.CATALOG_CATEGORY + slug + "/")
    .then((r) => r.data);
};
