import React from "react";
import { HomeCategoriesProps } from "@/components/Home/types";
import { styles } from "@/components/Home/HomeCategories/index.styles";
import HCItem from "@/components/Home/HomeCategories/HCItem";

const HomeCategories = ({ categories }: HomeCategoriesProps) => {
  let count = 0;

  return (
    <ContainerSC>
      {categories.map((category) => {
        count += 1;
        if (count > 3) {
          count = 1;
        }
        return <HCItem key={category.slug} count={count} {...category} />;
      })}
    </ContainerSC>
  );
};

const { ContainerSC } = styles;

export default React.memo(HomeCategories);
