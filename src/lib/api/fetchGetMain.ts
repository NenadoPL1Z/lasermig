import { axiosProject } from "@/lib/http";
import { ApiNamespace } from "@/lib/constants/namespaces/ApiNamespace";
import { NewsArr } from "@/lib/models/NewsModel";
import { CategoriesArr } from "@/lib/models/CategoryModel";

export type FetchGetMainRequest = {
  slider: string[];
  news: NewsArr;
  category: CategoriesArr;
};

export const fetchGetMain = () => {
  return axiosProject
    .get<FetchGetMainRequest>(ApiNamespace.MAIN)
    .then((r) => r.data);
};
