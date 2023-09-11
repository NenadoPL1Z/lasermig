import { axiosProject } from "@/lib/http";
import { ApiNamespace } from "@/lib/constants/namespaces/ApiNamespace";
import { TagsArr } from "@/lib/models/TagModel";
import { PaginationResult } from "@/types/types";
import { ProductsArr } from "@/lib/models/ProductModel";
import { INITIAL_PAGE, PAGE_LIMIT } from "@/lib/constants";

type FetchGetCategoryData = {
  page?: number;
  limit?: number;
  id?: number[];
};

export interface FetchGetCategoryResponse {
  category_tags: TagsArr;
  products: PaginationResult<ProductsArr>;
}

export const fetchGetCategory = (
  slug: string,
  { page = INITIAL_PAGE, limit = PAGE_LIMIT, id = [] }: FetchGetCategoryData,
) => {
  const queryId = id?.length ? `&tags=${id.join(",")}` : "";
  const query = `?page=${page}&per_page=${limit}${queryId}`;

  return axiosProject
    .get<FetchGetCategoryResponse>(
      `${ApiNamespace.CATALOG_CATEGORY}${slug}/${query}`,
    )
    .then((r) => r.data);
};
