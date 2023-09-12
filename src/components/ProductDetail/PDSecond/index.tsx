import React from "react";
import { styles } from "@/components/ProductDetail/PDSecond/index.styles";
import { ProductDetailModel } from "@/lib/models/ProductDetailModel";
import PDPrice from "@/components/ProductDetail/PDPrice";

interface PDSecondProps
  extends Pick<
    ProductDetailModel,
    "price" | "description" | "additional_title" | "additional_description"
  > {}

const PDSecond = ({
  price,
  description,
  additional_title,
  additional_description,
}: PDSecondProps) => {
  return (
    <ContainerSC>
      <TopSC>
        <PDPrice price={price} />
      </TopSC>
      <BottomSC>
        {(additional_title || additional_description) && (
          <AdditionalSC>
            {additional_title && (
              <AdditionalTitleSC>{additional_title}</AdditionalTitleSC>
            )}
            {additional_description && (
              <AdditionalDescSC>{additional_description}</AdditionalDescSC>
            )}
          </AdditionalSC>
        )}
        {description && <DesSC>{description}</DesSC>}
      </BottomSC>
    </ContainerSC>
  );
};

const {
  ContainerSC,
  TopSC,
  BottomSC,
  DesSC,
  AdditionalSC,
  AdditionalTitleSC,
  AdditionalDescSC,
} = styles;

export default React.memo(PDSecond);
