import React from "react";
import { CategoryModel } from "@/lib/models/CategoryModel";

const CategoryCard = ({ name }: CategoryModel) => {
  return <div>{name}</div>;
};

export default React.memo(CategoryCard);
