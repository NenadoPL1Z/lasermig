import { useEffect, useState } from "react";
import { useStatus } from "@/hooks/useStatus";
import { INITIAL_PAGE } from "@/lib/constants";
import { ErrorNamespace } from "@/lib/constants/namespaces/ErrorNamespace";
import { NewsListProps } from "@/components/News/types";
import { NewsArr } from "@/lib/models/NewsModel";
import { fetchGetNews } from "@/lib/api/news/fetchGetNews";
import { useTags } from "@/hooks/useTags";

export const useNewsList = (props: NewsListProps) => {
  const { tags, query } = useTags();

  const tagsId = props.tags
    .filter((item) => {
      return tags.find((queryItem) => queryItem === item.name);
    })
    .map((item) => item.id);

  const [page, setPage] = useState(INITIAL_PAGE);
  const [isEnd, setIsEnd] = useState(props.results?.length === props.count);
  const [localResult, setLocalResult] = useState<NewsArr>(
    !tagsId.length ? props.results || [] : [],
  );

  const { isLoading, handleChangeStatus } = useStatus({
    isLoading: false,
    hasError: "",
  });

  const loadData = (isReplace = false) => {
    handleChangeStatus({ isLoading: true, hasError: "" });

    fetchGetNews({ page: isReplace ? 1 : page, id: tagsId })
      .then(({ news }) => {
        setLocalResult((prevState) => {
          if (isReplace) {
            setIsEnd(news.results.length >= news.count);
            setPage(2);
            return news.results;
          }
          if (!isReplace) {
            const result = [...prevState, ...news.results];
            setIsEnd(result.length >= news.count);
            setPage((prevState) => prevState + 1);
            return result;
          }
          return prevState;
        });

        handleChangeStatus({ isLoading: false, hasError: "" });
      })
      .catch(() => {
        handleChangeStatus({
          isLoading: false,
          hasError: ErrorNamespace.DEFAULT,
        });
      });
  };

  const handleLoadMore = () => {
    loadData();
  };

  useEffect(() => {
    if (tags) {
      loadData(true);
    }
  }, [query]);

  return {
    isEnd,
    isLoading,

    localResult,
    handleLoadMore,
  };
};
