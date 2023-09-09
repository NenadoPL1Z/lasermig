import React from "react";
import { H1SC } from "@/UI/H1SC";
import { GetServerSideProps } from "next";
import { CategoriesArr } from "@/lib/models/CategoryModel";
import { fetchGetCategories } from "@/lib/api/catalog/fetchGetCategories";
import CategoriesList from "@/components/Catalog/CategoriesList";
import { styles } from "@/styles/pages/catalog.styles";

interface CatalogProps {
  categories: CategoriesArr;
}

const Catalog = ({ categories }: CatalogProps) => {
  return (
    <>
      <H1SC>Каталог</H1SC>
      <ListSC>
        <CategoriesList categories={categories} />
      </ListSC>
    </>
  );
};

const { ListSC } = styles;

export const getServerSideProps: GetServerSideProps<
  CatalogProps
> = async () => {
  const categories = await fetchGetCategories();
  return { props: { categories } };
};

export default React.memo(Catalog);
