import React from "react";
import { styles } from "@/components/Home/HomeBg/index.styles";

const HomeBg = () => {
  return (
    <ContainerSC>
      <WrapperSC>
        <BgSC />
      </WrapperSC>
    </ContainerSC>
  );
};

const { ContainerSC, WrapperSC, BgSC } = styles;

export default React.memo(HomeBg);
