import React from "react";
import { styles } from "@/components/ProductDetail/PDTop/index.styles";
import PDFirst from "@/components/ProductDetail/PDFirst";
import PDSecond from "@/components/ProductDetail/PDSecond";
import PDSwiper from "@/components/ProductDetail/PDSwiper";
import { PDTopProps } from "@/components/ProductDetail/types";

const PDTop = (props: PDTopProps) => {
  return (
    <ContainerSC className="content content-br">
      <LeftSC>
        <PDFirst tags={props.tags} name={props.name} />
        <DescSC>
          <PDSecond
            price={props.price}
            description={props.description}
            additional_title={props.additional_title}
            additional_description={props.additional_description}
          />
        </DescSC>
      </LeftSC>
      <RightSC>
        {!!props.product_images?.length && (
          <PDSwiper product_images={props.product_images} />
        )}
      </RightSC>
      <MobileSC>
        <PDSecond
          price={props.price}
          description={props.description}
          additional_title={props.additional_title}
          additional_description={props.additional_description}
        />
      </MobileSC>
    </ContainerSC>
  );
};

const { ContainerSC, DescSC, MobileSC, LeftSC, RightSC } = styles;

export default React.memo(PDTop);
