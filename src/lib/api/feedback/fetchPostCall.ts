import { axiosProject } from "@/lib/http";
import { ApiNamespace } from "@/lib/constants/namespaces/ApiNamespace";
import { FormCall } from "@/lib/models/Forms/FormCall";

export const fetchPostCall = (data: FormCall) => {
  return axiosProject
    .post(ApiNamespace.FEEDBACK_CALL, data)
    .then((r) => r.data);
};
