import React from "react";
import { checkPrice } from "@/lib/services";
import ModalCall from "@/UI/Modals/variant/ModalCall";
import { useToggle } from "@/hooks/useToggle";
import { styles } from "@/components/ProductDetail/PDPrice/index.styles";
import { PDPriceProps } from "@/components/ProductDetail/types";

const PDPrice = ({ price }: PDPriceProps) => {
  const { isOpen, handleOpen, handleClose } = useToggle();

  return (
    <>
      <ButtonSC onClick={handleOpen}>Заказать в 1 клик</ButtonSC>
      {price && (
        <PriceSC>
          <PriceLabelSC>Цена</PriceLabelSC>
          <PriceSumSC>{checkPrice(price)}</PriceSumSC>
        </PriceSC>
      )}
      <ModalCall isOpen={isOpen} handleClose={handleClose} />
    </>
  );
};

const { ButtonSC, PriceSC, PriceLabelSC, PriceSumSC } = styles;

export default React.memo(PDPrice);
