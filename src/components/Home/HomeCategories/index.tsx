import React from "react";
import { HomeCategoriesProps } from "@/components/Home/types";
import { styles } from "@/components/Home/HomeCategories/index.styles";

const HomeCategories = ({ categories }: HomeCategoriesProps) => {
  return (
    <ContainerSC>
      {categories.map((category) => (
        <div key={category.name}>{category.name}</div>
      ))}
    </ContainerSC>
  );
};

const { ContainerSC } = styles;

export default React.memo(HomeCategories);
