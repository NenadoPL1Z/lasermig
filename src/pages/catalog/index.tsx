import React from "react";
import { GetServerSideProps } from "next";
import { CategoriesArr } from "@/lib/models/CategoryModel";
import { fetchGetCategories } from "@/lib/api/catalog/fetchGetCategories";
import CategoriesList from "@/components/Catalog/CategoriesList";
import { styles } from "@/styles/pages/catalog.styles";
import ProductsList from "@/components/Catalog/ProductsList";
import { ProductsArr } from "@/lib/models/ProductModel";
import { fetchGetProducts } from "@/lib/api/catalog/fetchGetProducts";
import { PaginationResult } from "@/types/types";
import Questions from "@/components/Questions";
import TitleLayout from "@/layout/TitleLayout";
import Orders from "@/components/Orders";

interface CatalogProps {
  categories: CategoriesArr;
  products: PaginationResult<ProductsArr>;
}

const Catalog = ({ categories, products }: CatalogProps) => {
  return (
    <TitleLayout title="Каталог">
      <TitleSC className="padding">Каталог</TitleSC>
      {categories && (
        <CategoriesSC className="padding">
          <CategoriesList categories={categories} />
        </CategoriesSC>
      )}
      {!!products?.count && (
        <ContainerSC className="padding">
          <ProductsList {...products} />
        </ContainerSC>
      )}
      <ContainerSC>
        <Orders />
      </ContainerSC>
      <div className="padding">
        <Questions />
      </div>
    </TitleLayout>
  );
};

const { TitleSC, CategoriesSC, ContainerSC } = styles;

export const getServerSideProps: GetServerSideProps<
  CatalogProps
> = async () => {
  const categories = await fetchGetCategories();
  const products = await fetchGetProducts({ page: 1 });
  return { props: { categories, products } };
};

export default React.memo(Catalog);
