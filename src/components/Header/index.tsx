import React, { useState } from "react";
import { styled } from "@mui/material";
import { Breakpoints } from "@/styles/theme/Breakpoints";
import HeaderDesktop from "@/components/Header/HeaderDesktop";
import HeaderMobile from "@/components/Header/HeaderMobile";
import ColorScheme from "@/styles/theme/ColorScheme";
import { useMobile } from "@/hooks/useMedia";

const Header = () => {
  const [isVisibleHeader, setIsVisibleHeader] = useState<boolean>(true);
  const isMobile = useMobile();

  const handleChangeVisible = (state: boolean) => {
    setIsVisibleHeader(state);
  };

  return (
    <HeaderSC
      className={`container disable-mobile-safe ${
        isVisibleHeader ? "" : "header-hide"
      }`}>
      {!isMobile && <HeaderDesktop handleChangeVisible={handleChangeVisible} />}
      <HeaderMobile />
    </HeaderSC>
  );
};

const HeaderSC = styled("header")`
  height: 99px;

  position: sticky;
  top: 20px;
  z-index: 1;

  border-radius: 50px;
  box-shadow: 0 9px 34px 0 rgba(223, 223, 223, 0.42);
  background-color: ${ColorScheme.WHITE};

  transition: 0.2s all linear;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    height: auto;

    top: 0;
    border-radius: 0 0 24px 24px;
  }
`;

export default React.memo(Header);
