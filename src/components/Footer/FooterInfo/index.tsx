import React from "react";
import Lasermig from "@/assets/icons/Lasermig.svg";
import { styled } from "@mui/material";
import { companyData } from "@/lib/mock/companyData";
import ColorScheme from "@/styles/theme/ColorScheme";
import { Breakpoints } from "@/styles/theme/Breakpoints";
import FooterMoore from "@/components/Footer/FooterMoore/FooterMoore";

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

const ContainerSC = styled("section")`
  width: 100%;
  max-width: 450px;
  margin-right: 70px;

  @media (max-width: ${Breakpoints.TABLET}px) {
    max-width: none;
    margin-right: 0;
  }
`;

const LogoSC = styled("div")`
  width: 226px;
  height: 44px;

  margin-bottom: 32px;

  & > svg > g > *:last-child {
    fill: ${ColorScheme.WHITE};
  }

  @media (max-width: ${Breakpoints.TABLET}px) {
    width: 153px;
    height: 30px;
  }
`;

const AddressSC = styled("address")`
  color: ${ColorScheme.WHITE};

  font-size: 18px;
  font-style: normal;
  white-space: pre-wrap;

  margin-bottom: 32px;

  @media (max-width: ${Breakpoints.TABLET}px) {
    font-size: 14px;
  }
`;

const WorkTimeTitleSC = styled("div")`
  color: ${ColorScheme.WHITE};

  font-size: 18px;
  margin-bottom: 10px;

  @media (max-width: ${Breakpoints.TABLET}px) {
    font-size: 14px;
  }
`;

const WorkTimeSC = styled("div")`
  color: ${ColorScheme.TERTIARY};

  font-size: 18px;
  white-space: pre-wrap;

  margin-bottom: 84px;

  @media (max-width: ${Breakpoints.TABLET}px) {
    font-size: 14px;
    margin-bottom: 36px;
  }
`;

const BottomSC = styled("div")`
  @media (max-width: ${Breakpoints.TABLET}px) {
    display: none;
  }
`;

export default React.memo(FooterInfo);
