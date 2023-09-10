import { axiosProject } from "@/lib/http";
import { ApiNamespace } from "@/lib/constants/namespaces/ApiNamespace";
import { ProductsArr } from "@/lib/models/ProductModel";
import { PaginationResult } from "@/types/types";
import { INITIAL_PAGE, PAGE_LIMIT } from "@/lib/constants";

type FetchGetProductsData = {
  page?: number;
  limit?: number;
};

export const fetchGetProducts = ({
  page = INITIAL_PAGE,
  limit = PAGE_LIMIT,
}: FetchGetProductsData) => {
  return axiosProject
    .get<PaginationResult<ProductsArr>>(
      ApiNamespace.CATALOG_PRODUCTS + `?page=${page}&per_page=${limit}`,
    )
    .then((r) => r.data);
};
