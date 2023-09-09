import React from "react";
import { styles } from "@/components/Advantages/index.styles";
import { advantagesData } from "@/lib/mock/advantagesData";
import AdvantageItem from "@/components/Advantages/AdvantageItem";

const Advantages = () => {
  return (
    <ContainerSC>
      <LeftSC className="content content-br">
        <TitleSC>преимущества работы с нами</TitleSC>
      </LeftSC>
      <RightSC className="content content-br">
        {advantagesData.map((advantageItem) => (
          <AdvantageItem key={advantageItem.title} {...advantageItem} />
        ))}
      </RightSC>
    </ContainerSC>
  );
};

const { ContainerSC, LeftSC, TitleSC, RightSC } = styles;

export default React.memo(Advantages);
