import { axiosProject } from "@/lib/http";
import { ApiNamespace } from "@/lib/constants/namespaces/ApiNamespace";
import { ProductDetailModel } from "@/lib/models/ProductDetailModel";

export const fetchGetProduct = (slug: string) => {
  return axiosProject
    .get<ProductDetailModel>(`${ApiNamespace.CATALOG_PRODUCTS}${slug}/`)
    .then((r) => r.data);
};
