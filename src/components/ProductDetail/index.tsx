import React from "react";
import { ProductDetailModel } from "@/lib/models/ProductDetailModel";
import PDInfo from "@/components/ProductDetail/PDInfo";
import PDTop from "@/components/ProductDetail/PDTop";

const ProductDetail = ({
  advantages,
  product_characteristics,
  accessories,
  guarantees,
  ...otherProps
}: ProductDetailModel) => {
  return (
    <section className="padding">
      <PDTop {...otherProps} />
      <PDInfo
        advantages={advantages}
        product_characteristics={product_characteristics}
        accessories={accessories}
        guarantees={guarantees}
      />
    </section>
  );
};

export default React.memo(ProductDetail);
