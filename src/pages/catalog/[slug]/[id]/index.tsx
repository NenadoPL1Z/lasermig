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

interface ProductProps extends ProductDetailModel {}

const Product = (props: ProductProps) => {
  const { name, related_products } = props;
  return (
    <TitleLayout title={name}>
      <ProductDetail {...props} />
      {related_products.length && (
        <ContainerSC className="padding">
          <ProductsRelated products={related_products} />
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

const { ContainerSC } = styles;

export const getServerSideProps: GetServerSideProps<ProductProps> = async (
  context,
) => {
  const id = (context.query?.id as string) || "";
  const product = await fetchGetProduct(id);
  return { props: product };
};

export default React.memo(Product);
