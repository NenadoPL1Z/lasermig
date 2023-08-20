import React from "react";
import styled from "styled-components";
import FooterInfo from "@/components/Footer/FooterInfo";
import FooterAction from "@/components/Footer/FooterAction";
import FooterNav from "@/components/Footer/FooterNav";
import ColorScheme from "@/styles/theme/ColorScheme";
import { Breakpoints } from "@/styles/theme/Breakpoints";
import FooterMoore from "@/components/Footer/FooterMoore/FooterMoore";

const Footer = () => {
  return (
    <FooterSC className="container disable-mobile-safe">
      <FooterWrapperSC>
        <FooterInfo />
        <FooterNav />
        <FooterAction />
        <MobileSC>
          <FooterMoore />
        </MobileSC>
      </FooterWrapperSC>
    </FooterSC>
  );
};

const FooterSC = styled("footer")`
  background-color: ${ColorScheme.PRIMARY};

  background-image: url("/assets/images/Bg.png");
  background-repeat: no-repeat;
  background-position: right;

  border-radius: 50px;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    border-radius: 24px 24px 0 0;
  }

  @media (max-width: ${Breakpoints.TABLET}px) {
    background-image: none;
  }
`;

const FooterWrapperSC = styled("div")`
  display: flex;
  padding: 30px;

  @media (max-width: ${Breakpoints.TABLET}px) {
    padding: 16px;
    flex-direction: column;
  }
`;

const MobileSC = styled("section")`
  @media (min-width: ${Breakpoints.TABLET}px) {
    display: none;
  }
`;

export default React.memo(Footer);
