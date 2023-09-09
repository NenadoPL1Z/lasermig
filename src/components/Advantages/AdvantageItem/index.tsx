import React from "react";
import { styles } from "@/components/Advantages/AdvantageItem/index.styles";
import { AdvantagesItemProps } from "@/components/Advantages/types";

const AdvantageItem = ({ title, number, desc }: AdvantagesItemProps) => {
  return (
    <ContainerSC>
      <TopSC>
        <TitleSC>{title}</TitleSC>
        <NumSC>{number}</NumSC>
      </TopSC>
      <DescSC>{desc}</DescSC>
    </ContainerSC>
  );
};

const { ContainerSC, TopSC, TitleSC, NumSC, DescSC } = styles;

export default React.memo(AdvantageItem);
