import { axiosProject } from "@/lib/http";
import { ApiNamespace } from "@/lib/constants/namespaces/ApiNamespace";
import { INITIAL_PAGE, PAGE_LIMIT } from "@/lib/constants";
import { PaginationResult } from "@/types/types";
import { NewsArr } from "@/lib/models/NewsModel";
import { TagsArr } from "@/lib/models/TagModel";

type FetchGetNewsData = {
  page?: number;
  limit?: number;
};

export type FetchGetNewsResponse = {
  news_tags: TagsArr;
  news: PaginationResult<NewsArr>;
};

export const fetchGetNews = ({
  page = INITIAL_PAGE,
  limit = PAGE_LIMIT,
}: FetchGetNewsData) => {
  return axiosProject
    .get<FetchGetNewsResponse>(
      ApiNamespace.NEWS + `?page${page}&per_page=${limit}`,
    )
    .then((r) => r.data);
};
