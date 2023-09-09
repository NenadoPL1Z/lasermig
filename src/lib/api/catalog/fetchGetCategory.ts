import { axiosProject } from "@/lib/http";
import { ApiNamespace } from "@/lib/constants/namespaces/ApiNamespace";

export const fetchGetCategory = () => {
  return axiosProject.get(ApiNamespace.CATALOG_CATEGORY).then((r) => r.data);
};
