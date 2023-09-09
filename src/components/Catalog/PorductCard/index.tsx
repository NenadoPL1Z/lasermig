import React from "react";
import { ProductModel } from "@/lib/models/ProductModel";

const ProductCard = ({ name }: ProductModel) => {
  return <li>{name}</li>;
};

export default React.memo(ProductCard);
