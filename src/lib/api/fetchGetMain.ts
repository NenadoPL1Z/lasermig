import { axiosProject } from "@/lib/http";
import { ApiNamespace } from "@/lib/constants/namespaces/ApiNamespace";
import { NewsArr } from "@/lib/models/NewsModel";
import { CategoriesArr } from "@/lib/models/CategoryModel";
import { SliderArr } from "@/lib/models/SliderModel";

export type FetchGetMainResponse = {
  slider: SliderArr;
  news: NewsArr;
  category: CategoriesArr;
};

export const fetchGetMain = () => {
  return axiosProject
    .get<FetchGetMainResponse>(ApiNamespace.MAIN)
    .then((r) => r.data);
};
