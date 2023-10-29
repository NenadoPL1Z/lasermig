import React from "react";
import { useProductList } from "@/components/Catalog/ProductsList/useProductList";
import { ProductListProps } from "@/components/Catalog/ProductsList/types";
import { styles } from "@/components/Catalog/ProductsList/index.styles";
import ProductCard from "@/components/Catalog/PorductCard";
import { OutlinedButton } from "@/UI/Buttons/OutlinedButton";
import { CircularProgress } from "@mui/material";

const ProductsList = (props: ProductListProps) => {
  const { isEnd, isLoading, localResult, handleLoadMore } =
    useProductList(props);

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
