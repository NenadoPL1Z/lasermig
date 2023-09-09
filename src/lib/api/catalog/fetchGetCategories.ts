import { axiosProject } from "@/lib/http";
import { ApiNamespace } from "@/lib/constants/namespaces/ApiNamespace";
import { CategoriesArr } from "@/lib/models/CategoryModel";

export const fetchGetCategories = () => {
  return axiosProject
    .get<CategoriesArr>(ApiNamespace.CATALOG_CATEGORY)
    .then((r) => r.data);
};
