import React from "react";
import { navData } from "@/lib/mock/navData";
import { styles } from "@/components/Footer/FooterNav/index.styles";

const FooterNav = () => {
  return (
    <ContainerSC>
      <UlSC>
        {navData.map((item) => (
          <LiSC key={item.path}>
            <CustomLinkSC href={item.path}>{item.title}</CustomLinkSC>
          </LiSC>
        ))}
      </UlSC>
    </ContainerSC>
  );
};

const { ContainerSC, UlSC, LiSC, CustomLinkSC } = styles;

export default React.memo(FooterNav);
