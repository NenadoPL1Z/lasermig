import React from "react";
import HeaderDesktop from "@/components/Header/HeaderDesktop";
import HeaderMobile from "@/components/Header/HeaderMobile";
import { useHeader } from "@/components/Header/useHeader";
import { styles } from "@/components/Header/index.styles";

const Header = () => {
  const { isMobile, isVisibleHeader, handleChangeVisible } = useHeader();

  return (
    <HeaderSC
      className={`container-three disable-mobile-safe ${
        isVisibleHeader ? "" : "header-hide"
      }`}>
      {!isMobile && <HeaderDesktop handleChangeVisible={handleChangeVisible} />}
      <HeaderMobile />
    </HeaderSC>
  );
};

const { HeaderSC } = styles;

export default React.memo(Header);
