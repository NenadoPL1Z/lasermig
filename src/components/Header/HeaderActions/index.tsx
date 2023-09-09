import React from "react";
import { companyData } from "@/lib/mock/companyData";
import CallButton from "@/components/CallButton";
import { styles } from "@/components/Header/HeaderActions/index.styles";

const HeaderActions = () => {
  return (
    <ContainerSC>
      <TelSC href={companyData.hrefPhone}>{companyData.phone}</TelSC>
      <CallButton />
    </ContainerSC>
  );
};

const { ContainerSC, TelSC } = styles;

export default React.memo(HeaderActions);
