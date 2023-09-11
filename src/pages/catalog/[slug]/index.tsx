import React from "react";
import { GetServerSideProps } from "next";
import {
  fetchGetCategory,
  FetchGetCategoryResponse,
} from "@/lib/api/catalog/fetchGetCategory";
import { styles } from "@/styles/pages/category.styles";
import TitleLayout from "@/layout/TitleLayout";
import CatalogBack from "@/components/Catalog/CatalogBack";
import { RoutesNamespace } from "@/lib/constants/namespaces/RoutesNamespace";
import TagsList from "@/components/Tags/TagsList";
import Questions from "@/components/Questions";
import Orders from "@/components/Orders";
import ProductsListSlug from "@/components/Catalog/ProductsListSlug";

interface CategoryProps extends FetchGetCategoryResponse {}

const Category = ({ category_tags, products }: CategoryProps) => {
  const title = products.results[0]?.category.name;
  return (
    <TitleLayout title={title}>
      <BackSC className="padding">
        <CatalogBack href={RoutesNamespace.CATALOG} />
      </BackSC>
      <TitleSC className="padding">{title}</TitleSC>
      <TagsList tags={category_tags} />
      <ContainerSC className="padding">
        <ProductsListSlug tags={category_tags} {...products} />
      </ContainerSC>
      <ContainerSC>
        <Orders />
      </ContainerSC>
      <div className="padding">
        <Questions />
      </div>
    </TitleLayout>
  );
};

const { BackSC, TitleSC, ContainerSC } = styles;

export const getServerSideProps: GetServerSideProps<CategoryProps> = async (
  context,
) => {
  const slug = (context.query?.slug as string) || "";
  const category = await fetchGetCategory(slug, {});
  return { props: category };
};

export default React.memo(Category);
