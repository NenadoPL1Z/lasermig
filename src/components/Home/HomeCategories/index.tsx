import React from "react";
import { HomeCategoriesProps } from "@/components/Home/types";
import { styles } from "@/components/Home/HomeCategories/index.styles";
import HCItem from "@/components/Home/HomeCategories/HCItem";

const HomeCategories = ({ categories }: HomeCategoriesProps) => {
  return (
    <ContainerSC>
      {categories.map((category) => (
        <HCItem key={category.slug} {...category} />
      ))}
    </ContainerSC>
  );
};

const { ContainerSC } = styles;

export default React.memo(HomeCategories);
