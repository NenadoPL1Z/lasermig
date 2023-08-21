import React from "react";
import { styled } from "@mui/material";
import { companyData } from "@/lib/mock/companyData";
import { LinkSC } from "@/UI/LinkSC";
import Request from "@/components/Request/Request";
import ColorScheme from "@/styles/theme/ColorScheme";
import { Breakpoints } from "@/styles/theme/Breakpoints";

const FooterAction = () => {
  return (
    <ContainerSC>
      <TelSC href={companyData.hrefPhone}>{companyData.phone}</TelSC>
      <EmailSC href={companyData.hrefEmail}>{companyData.email}</EmailSC>
      <Request />
    </ContainerSC>
  );
};

const ContainerSC = styled("section")`
  display: flex;
  flex-direction: column;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    margin-bottom: 36px;
  }
`;
const TelSC = styled(LinkSC)`
  color: ${ColorScheme.WHITE};

  font-size: 32px;
  font-weight: 700;

  margin-bottom: 24px;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    font-size: 24px;
    margin-bottom: 16px;
  }
`;
const EmailSC = styled(LinkSC)`
  color: ${ColorScheme.WHITE};

  font-size: 32px;
  font-weight: 700;

  margin-bottom: 36px;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    font-size: 24px;
    margin-bottom: 24px;
  }
`;

export default React.memo(FooterAction);
