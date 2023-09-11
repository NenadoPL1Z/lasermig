import React from "react";
import { styles } from "@/components/Catalog/ProductsRelated/index.styles";
import { ProductsArr } from "@/lib/models/ProductModel";
import ProductCard from "@/components/Catalog/PorductCard";

interface ProductsRelatedProps {
  products: ProductsArr;
}

const ProductsRelated = ({ products }: ProductsRelatedProps) => {
  return (
    <>
      <TitleSC>Смотрите также</TitleSC>
      <ListSC>
        {products.map((product) => (
          <ProductCard key={product.slug} {...product} />
        ))}
      </ListSC>
    </>
  );
};

const { TitleSC, ListSC } = styles;

export default React.memo(ProductsRelated);
