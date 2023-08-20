import React from "react";
import { LinkSC } from "@/UI/LinkSC";
import { headerInfo } from "@/lib/mock/headerData";
import { Button } from "@mui/material";
import styled from "styled-components";
import { Breakpoints } from "@/styles/theme/Breakpoints";
import ColorScheme from "@/styles/theme/ColorScheme";

const Index = () => {
  return (
    <ContainerSC className="mobile-safe">
      <TelSC href={headerInfo.hrefPhone}>{headerInfo.phone}</TelSC>
      <Button>Оставить заявку</Button>
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
