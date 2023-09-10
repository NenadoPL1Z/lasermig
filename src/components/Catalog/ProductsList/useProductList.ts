import { ProductListProps } from "@/components/Catalog/ProductsList/types";
import { ProductsArr } from "@/lib/models/ProductModel";
import { useState } from "react";
import { useStatus } from "@/hooks/useStatus";
import { INITIAL_PAGE } from "@/lib/constants";
import { fetchGetProducts } from "@/lib/api/catalog/fetchGetProducts";
import { ErrorNamespace } from "@/lib/constants/namespaces/ErrorNamespace";

export const useProductList = (props: ProductListProps) => {
  const { count, results } = props;

  const [page, setPage] = useState(INITIAL_PAGE + 1);
  const [isEnd, setIsEnd] = useState(results?.length === count);
  const [localResult, setLocalResult] = useState<ProductsArr>(results || []);

  const { isLoading, handleChangeStatus } = useStatus({
    isLoading: false,
    hasError: "",
  });

  const loadData = () => {
    handleChangeStatus({ isLoading: true, hasError: "" });

    fetchGetProducts({ page })
      .then(({ results }) => {
        setPage((prevState) => prevState + 1);

        setLocalResult((prevState) => {
          const result = [...prevState, ...results];
          setIsEnd(result.length >= count);
          return result;
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

  return {
    isEnd,
    isLoading,

    localResult,
    handleLoadMore,
  };
};
