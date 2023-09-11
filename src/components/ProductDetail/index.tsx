import React from "react";
import { ProductDetailModel } from "@/lib/models/ProductDetailModel";
import PDInfo from "@/components/ProductDetail/PDInfo";

const ProductDetail = ({
  advantages,
  product_characteristics,
  accessories,
  guarantees,
}: ProductDetailModel) => {
  return (
    <>
      <PDInfo
        advantages={advantages}
        product_characteristics={product_characteristics}
        accessories={accessories}
        guarantees={guarantees}
      />
    </>
  );
};

export default React.memo(ProductDetail);
