import React from "react";
import { styles } from "@/styles/pages/product.styles";
import { GetServerSideProps } from "next";
import TitleLayout from "@/layout/TitleLayout";
import { fetchGetProduct } from "@/lib/api/catalog/fetchGetProduct";
import { ProductDetailModel } from "@/lib/models/ProductDetailModel";
import Questions from "@/components/Questions";
import Orders from "@/components/Orders";
import ProductsRelated from "@/components/Catalog/ProductsRelated";
import ProductDetail from "@/components/ProductDetail";
import PDPrice from "@/components/ProductDetail/PDPrice";

interface ProductProps extends ProductDetailModel {}

const Product = (props: ProductProps) => {
  const { name, related_products } = props;
  return (
    <TitleLayout title={name}>
      <ProductDetail {...props} />
      {!!related_products.length && (
        <ContainerSC className="padding">
          <ProductsRelated products={related_products} />
        </ContainerSC>
      )}
      <ContainerSC>
        <Orders />
      </ContainerSC>
      <LastSC className="padding">
        <Questions />
      </LastSC>
      <BottomSC className="padding">
        <BottomWrapperSC>
          <PDPrice price={props.price} />
        </BottomWrapperSC>
      </BottomSC>
    </TitleLayout>
  );
};

const { ContainerSC, LastSC, BottomSC, BottomWrapperSC } = styles;

export const getServerSideProps: GetServerSideProps<ProductProps> = async (
  context,
) => {
  const id = (context.query?.id as string) || "";
  const product = await fetchGetProduct(id);
  return { props: product };
};

export default React.memo(Product);
