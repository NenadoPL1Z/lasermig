import React from "react";
import { companyData } from "@/lib/mock/companyData";
import { styles } from "@/components/Footer/FooterAction/index.styles";
import CallButton from "@/components/CallButton";

const FooterAction = () => {
  return (
    <ContainerSC>
      <TelSC href={companyData.hrefPhone}>{companyData.phone}</TelSC>
      <EmailSC href={companyData.hrefEmail}>{companyData.email}</EmailSC>
      <CallButton />
    </ContainerSC>
  );
};

const { ContainerSC, TelSC, EmailSC } = styles;

export default React.memo(FooterAction);
