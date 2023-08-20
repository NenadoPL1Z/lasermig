import React from "react";
import Lasermig from "@/assets/icons/Lasermig.svg";
import { styled } from "@mui/material";
import { Breakpoints } from "@/styles/theme/Breakpoints";
import HeaderNav from "@/components/Header/HeaderNav";
import HeaderActions from "@/components/Header/HeaderActions";
import { useHeaderDesktop } from "@/components/Header/HeaderDesktop/useHeaderDesktop";

export interface HeaderDesktopProps {
  handleChangeVisible: (state: boolean) => void;
}

const HeaderDesktop = (props: HeaderDesktopProps) => {
  useHeaderDesktop(props);

  return (
    <WrapperSC>
      <HeaderNav />
      <MiddleSC>
        <LogoSC>
          <Lasermig />
        </LogoSC>
      </MiddleSC>
      <HeaderActions />
    </WrapperSC>
  );
};

const WrapperSC = styled("div")`
  position: relative;

  height: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 20px 0 40px;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    display: none;
  }
`;

const MiddleSC = styled("section")`
  padding-bottom: 6px;
  position: absolute;

  left: 50%;
  transform: translateX(-50%);
`;

const LogoSC = styled("div")`
  width: 226px;
  height: 44px;
`;
export default React.memo(HeaderDesktop);
