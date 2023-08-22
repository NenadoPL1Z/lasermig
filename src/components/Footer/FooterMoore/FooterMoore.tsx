import React from "react";
import { styled } from "@mui/material";
import ColorScheme from "@/styles/theme/ColorScheme";
import { Breakpoints } from "@/styles/theme/Breakpoints";
import { headData } from "@/lib/mock/headData";

const FooterMoore = () => {
  return (
    <>
      <PolicySC>Политика конфиденциальности</PolicySC>
      <AllRightSC>
        {headData.titleSmall}, все права защищены, {new Date().getFullYear()}
      </AllRightSC>
    </>
  );
};

const PolicySC = styled("div")`
  color: ${ColorScheme.TERTIARY};
  font-size: 18px;
  margin-bottom: 10px;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    font-size: 12px;
  }
`;

const AllRightSC = styled("div")`
  color: ${ColorScheme.TERTIARY};
  font-size: 18px;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    font-size: 12px;
  }
`;

export default React.memo(FooterMoore);
