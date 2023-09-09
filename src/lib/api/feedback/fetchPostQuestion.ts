import { axiosProject } from "@/lib/http";
import { FormQuestion } from "@/lib/models/Forms/FormQuestion";
import { ApiNamespace } from "@/lib/constants/namespaces/ApiNamespace";

export const fetchPostQuestion = (data: FormQuestion) => {
  return axiosProject
    .post(ApiNamespace.FEEDBACK_QUESTION, data)
    .then((r) => r.data);
};
