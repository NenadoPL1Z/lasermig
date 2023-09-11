import React from "react";
import { ProductDetailModel } from "@/lib/models/ProductDetailModel";
import { styles } from "@/components/ProductDetail/PDTop/index.styles";
import PDFirst from "@/components/ProductDetail/PDFirst";
import PDSecond from "@/components/ProductDetail/PDSecond";
import PDSwiper from "@/components/ProductDetail/PDSwiper";

interface PDTopProps
  extends Omit<
    ProductDetailModel,
    "advantages" | "product_characteristics" | "accessories" | "guarantees"
  > {}

const PDTop = (props: PDTopProps) => {
  return (
    <ContainerSC className="content content-br">
      <LeftSC>
        <PDFirst tags={props.tags} name={props.name} />
        <PDSecond
          price={props.price}
          description={props.description}
          additional_title={props.additional_title}
          additional_description={props.additional_description}
        />
      </LeftSC>
      <RightSC>
        {props.product_images?.length && (
          <PDSwiper product_images={props.product_images} />
        )}
      </RightSC>
    </ContainerSC>
  );
};

const { ContainerSC, LeftSC, RightSC } = styles;

export default React.memo(PDTop);
