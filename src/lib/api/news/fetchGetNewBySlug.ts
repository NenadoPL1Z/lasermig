import { axiosProject } from "@/lib/http";
import { ApiNamespace } from "@/lib/constants/namespaces/ApiNamespace";
import { NewsDetailModel } from "@/lib/models/NewsDetailModel";

export const fetchGetNewBySlug = (slug: string) => {
  return axiosProject
    .get<NewsDetailModel>(ApiNamespace.NEWS + slug + "/")
    .then((r) => r.data);
};
