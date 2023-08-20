import React from "react";
import { LinkSC } from "@/UI/LinkSC";
import { styled } from "@mui/material";
import { Breakpoints } from "@/styles/theme/Breakpoints";
import { companyData } from "@/lib/mock/companyData";
import Request from "@/components/Request/Request";

const Index = () => {
  return (
    <ContainerSC className="mobile-safe">
      <TelSC href={companyData.hrefPhone}>{companyData.phone}</TelSC>
      <Request />
    </ContainerSC>
  );
};

const ContainerSC = styled("section")`
  display: flex;
  align-items: center;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const TelSC = styled(LinkSC)`
  padding-top: 6px;
  margin-right: 24px;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    font-weight: 700;
    margin-bottom: 8px;
  }
`;

export default React.memo(Index);
