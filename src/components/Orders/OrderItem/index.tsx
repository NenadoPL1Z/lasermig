import React from "react";
import { OrderItemProps } from "@/components/Orders/types";
import { styles } from "@/components/Orders/OrderItem/index.styles";

const OrderItem = ({ title, desc, number }: OrderItemProps) => {
  return (
    <ContainerSC className="content content-br">
      <TopSC>
        <TitleSC>{title}</TitleSC>
        <NumberSC as="p">{number}</NumberSC>
      </TopSC>
      <DescSC>{desc}</DescSC>
    </ContainerSC>
  );
};

const { ContainerSC, TopSC, TitleSC, DescSC, NumberSC } = styles;

export default React.memo(OrderItem);
