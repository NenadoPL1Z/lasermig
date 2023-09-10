import { useEffect, useState } from "react";
import { useStatus } from "@/hooks/useStatus";
import { INITIAL_PAGE } from "@/lib/constants";
import { ErrorNamespace } from "@/lib/constants/namespaces/ErrorNamespace";
import { NewsListProps } from "@/components/News/types";
import { NewsArr } from "@/lib/models/NewsModel";
import { fetchGetNews } from "@/lib/api/news/fetchGetNews";
import { useTags } from "@/hooks/useTags";

export const useNewsList = (props: NewsListProps) => {
  const { count, results } = props;
  const { tags, query } = useTags();

  const [page, setPage] = useState(INITIAL_PAGE + 1);
  const [isEnd, setIsEnd] = useState(results?.length === count);
  const [localResult, setLocalResult] = useState<NewsArr>(results || []);

  const { isLoading, handleChangeStatus } = useStatus({
    isLoading: false,
    hasError: "",
  });

  const loadData = (isReplace = false) => {
    handleChangeStatus({ isLoading: true, hasError: "" });

    fetchGetNews({ page })
      .then(({ news: { results, count } }) => {
        setPage((prevState) => prevState + 1);

        setLocalResult((prevState) => {
          if (isReplace) {
            setIsEnd(results.length >= count);
            return results;
          }
          if (!isReplace) {
            const result = [...prevState, ...results];
            setIsEnd(result.length >= count);
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
      setPage(INITIAL_PAGE);
      setIsEnd(false);
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
