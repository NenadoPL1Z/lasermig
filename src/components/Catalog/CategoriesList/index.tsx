import React from "react";
import { styles } from "@/components/Catalog/CategoriesList/index.styles";
import { CategoriesArr } from "@/lib/models/CategoryModel";
import CategoryCard from "@/components/Catalog/CategoryCard";

interface CategoriesListProps {
  categories: CategoriesArr;
}

const CategoriesList = ({ categories }: CategoriesListProps) => {
  return (
    <UlSC>
      {categories.map((category) => (
        <CategoryCard key={category.slug} {...category} />
      ))}
    </UlSC>
  );
};

const { UlSC } = styles;

export default React.memo(CategoriesList);
