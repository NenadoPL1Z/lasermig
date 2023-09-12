import React from "react";
import Lasermig from "@/assets/icons/Lasermig.svg";
import HeaderNav from "@/components/Header/HeaderNav";
import HeaderActions from "@/components/Header/HeaderActions";
import { useHeaderDesktop } from "@/components/Header/HeaderDesktop/useHeaderDesktop";
import { styles } from "@/components/Header/HeaderDesktop/index.styles";
import { HeaderDesktopProps } from "@/components/Header/HeaderDesktop/types";
import { RoutesNamespace } from "@/lib/constants/namespaces/RoutesNamespace";
import { useScrollTop } from "@/hooks/useScrollTop";

const HeaderDesktop = (props: HeaderDesktopProps) => {
  useHeaderDesktop(props);
  const { handleClick } = useScrollTop(RoutesNamespace.HOME);

  return (
    <WrapperSC>
      <HeaderNav />
      <MiddleSC>
        <LogoSC onClick={handleClick}>
          <Lasermig />
        </LogoSC>
      </MiddleSC>
      <HeaderActions />
    </WrapperSC>
  );
};

const { WrapperSC, MiddleSC, LogoSC } = styles;

export default React.memo(HeaderDesktop);
