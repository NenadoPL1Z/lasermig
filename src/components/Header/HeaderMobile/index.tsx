import React, { useState } from "react";
import Lasermig from "@/assets/icons/Lasermig.svg";
import CallIcon from "@/assets/icons/CallIcon.svg";
import BurgerMenu from "@/assets/icons/BurgerMenu.svg";
import { Button } from "@mui/material";
import HeaderDrawer from "@/components/Header/HeaderMobile/HeaderDrawer";
import { companyData } from "@/lib/mock/companyData";
import { styles } from "@/components/Header/HeaderMobile/index.styles";

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

const { WrapperSC, LeftSC, MiddleSC, RightSC } = styles;
export default React.memo(HeaderMobile);
