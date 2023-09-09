import React from "react";
import Lasermig from "@/assets/icons/Lasermig.svg";
import { companyData } from "@/lib/mock/companyData";
import FooterMoore from "@/components/Footer/FooterMoore/FooterMoore";
import { styles } from "@/components/Footer/FooterInfo/index.styles";

const FooterInfo = () => {
  return (
    <ContainerSC>
      <LogoSC>
        <Lasermig />
      </LogoSC>
      <AddressSC>{companyData.address}</AddressSC>
      <WorkTimeTitleSC>График работы</WorkTimeTitleSC>
      <WorkTimeSC>{companyData.workTime}</WorkTimeSC>
      <BottomSC>
        <FooterMoore />
      </BottomSC>
    </ContainerSC>
  );
};

const {
  ContainerSC,
  LogoSC,
  AddressSC,
  WorkTimeTitleSC,
  WorkTimeSC,
  BottomSC,
} = styles;

export default React.memo(FooterInfo);
