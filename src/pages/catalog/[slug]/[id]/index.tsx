import React from "react";
import { styles } from "@/styles/pages/product.styles";
import { GetServerSideProps } from "next";
import TitleLayout from "@/layout/TitleLayout";
import { fetchGetProduct } from "@/lib/api/catalog/fetchGetProduct";
import { ProductDetailModel } from "@/lib/models/ProductDetailModel";
import Questions from "@/components/Questions";
import Orders from "@/components/Orders";

interface ProductProps extends ProductDetailModel {}

const Product = (props: ProductProps) => {
  const { name } = props;
  return (
    <TitleLayout title={name}>
      <ContainerSC className="padding"></ContainerSC>
      <ContainerSC className="padding">
        <Orders />
      </ContainerSC>
      <div className="padding">
        <Questions />
      </div>
    </TitleLayout>
  );
};

const { ContainerSC } = styles;

export const getServerSideProps: GetServerSideProps<ProductProps> = async (
  context,
) => {
  const id = (context.query?.id as string) || "";
  const product = await fetchGetProduct(id);
  return { props: product };
};

export default React.memo(Product);
