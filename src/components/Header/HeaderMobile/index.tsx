import React, { useState } from "react";
import styled from "styled-components";
import Lasermig from "@/assets/icons/Lasermig.svg";
import CallIcon from "@/assets/icons/CallIcon.svg";
import BurgerMenu from "@/assets/icons/BurgerMenu.svg";
import { Breakpoints } from "@/styles/theme/Breakpoints";
import { Button } from "@mui/material";
import HeaderDrawer from "@/components/Header/HeaderMobile/HeaderDrawer";
import { companyData } from "@/lib/mock/companyData";

const HeaderMobile = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <WrapperSC>
        <LeftSC>
          <Button variant="outlined" onClick={() => setIsOpen(true)}>
            <BurgerMenu />
          </Button>
        </LeftSC>
        <MiddleSC>
          <Lasermig />
        </MiddleSC>
        <RightSC>
          <Button variant="outlined" href={companyData.hrefPhone}>
            <CallIcon />
          </Button>
        </RightSC>
      </WrapperSC>
      <HeaderDrawer open={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

const WrapperSC = styled("div")`
  display: none;
  padding: 8px 16px;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
const LeftSC = styled("section")`
  height: 36px;
`;
const MiddleSC = styled("section")`
  width: 128px;
  height: 24px;
`;
const RightSC = styled("section")`
  height: 36px;
`;

export default React.memo(HeaderMobile);
