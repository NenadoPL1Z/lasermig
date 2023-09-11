import { ProductsArr } from "@/lib/models/ProductModel";
import { useEffect, useState } from "react";
import { useStatus } from "@/hooks/useStatus";
import { INITIAL_PAGE } from "@/lib/constants";
import { ErrorNamespace } from "@/lib/constants/namespaces/ErrorNamespace";
import { useTags } from "@/hooks/useTags";
import { ProductListSlugProps } from "@/components/Catalog/ProductsListSlug/types";
import { fetchGetCategory } from "@/lib/api/catalog/fetchGetCategory";

export const useProductListSlug = (props: ProductListSlugProps) => {
  const { tags, query } = useTags();

  const tagsId = props.tags
    .filter((item) => {
      return tags.find((queryItem) => queryItem === item.name);
    })
    .map((item) => item.id);

  const [page, setPage] = useState(INITIAL_PAGE);
  const [isEnd, setIsEnd] = useState(props.results?.length === props.count);
  const [localResult, setLocalResult] = useState<ProductsArr>(
    !tagsId.length ? props.results || [] : [],
  );

  const { isLoading, handleChangeStatus } = useStatus({
    isLoading: false,
    hasError: "",
  });

  const loadData = (isReplace = false) => {
    handleChangeStatus({ isLoading: true, hasError: "" });

    fetchGetCategory(query?.slug as string, {
      page: isReplace ? 1 : page,
      id: tagsId,
    })
      .then(({ products }) => {
        setLocalResult((prevState) => {
          if (isReplace) {
            setIsEnd(products.results.length >= products.count);
            setPage(2);
            return products.results;
          }
          if (!isReplace) {
            const result = [...prevState, ...products.results];
            setIsEnd(result.length >= products.count);
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
