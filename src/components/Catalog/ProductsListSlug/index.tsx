import React from "react";
import { styles } from "@/components/Catalog/ProductsList/index.styles";
import ProductCard from "@/components/Catalog/PorductCard";
import { OutlinedButton } from "@/UI/Buttons/OutlinedButton";
import { CircularProgress } from "@mui/material";
import { useProductListSlug } from "@/components/Catalog/ProductsListSlug/useProductListSlug";
import { ProductListSlugProps } from "@/components/Catalog/ProductsListSlug/types";

const ProductsList = (props: ProductListSlugProps) => {
  const { isEnd, isLoading, localResult, handleLoadMore } =
    useProductListSlug(props);

  return (
    <>
      <ListSC>
        {localResult.map((product) => (
          <ProductCard key={product.slug} {...product} />
        ))}
      </ListSC>
      {!isEnd && (
        <BottomSC>
          <OutlinedButton disabled={isLoading} onClick={handleLoadMore}>
            {isLoading && <CircularProgress size={20} />}
            {!isLoading && "Показать еще"}
          </OutlinedButton>
        </BottomSC>
      )}
    </>
  );
};

const { ListSC, BottomSC } = styles;

export default React.memo(ProductsList);
