import React from "react";
import { styles } from "@/components/ProductDetail/PDSecond/index.styles";
import { ProductDetailModel } from "@/lib/models/ProductDetailModel";
import { formatPrice } from "@/lib/services";
import { useToggle } from "@/hooks/useToggle";
import ModalCall from "@/UI/Modals/variant/ModalCall";

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
  const { isOpen, handleOpen, handleClose } = useToggle();

  return (
    <>
      <ContainerSC>
        <TopSC>
          <ButtonSC onClick={handleOpen}>Заказать в 1 клик</ButtonSC>
          {price && (
            <PriceSC>
              <PriceLabelSC>Цена</PriceLabelSC>
              <PriceSumSC>
                {isNaN(+price) ? price : ` ОТ ${formatPrice(+price)}`}
              </PriceSumSC>
            </PriceSC>
          )}
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
      <ModalCall isOpen={isOpen} handleClose={handleClose} />
    </>
  );
};

const {
  ContainerSC,
  TopSC,
  ButtonSC,
  PriceSC,
  PriceLabelSC,
  PriceSumSC,
  BottomSC,
  DesSC,
  AdditionalSC,
  AdditionalTitleSC,
  AdditionalDescSC,
} = styles;

export default React.memo(PDSecond);
