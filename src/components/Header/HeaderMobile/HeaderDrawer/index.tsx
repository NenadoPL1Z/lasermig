import React from "react";
import HeaderNav from "@/components/Header/HeaderNav";
import HeaderActions from "@/components/Header/HeaderActions";
import CloseIocn from "@/assets/icons/CloseIocn.svg";
import { styles } from "@/components/Header/HeaderMobile/HeaderDrawer/index.styles";
import { HeaderDrawerProps } from "@/components/Header/HeaderMobile/HeaderDrawer/types";
import { useHeaderDrawer } from "@/components/Header/HeaderMobile/HeaderDrawer/useHeaderDrawer";

const HeaderDrawer = (props: HeaderDrawerProps) => {
  const { handleClose, callbackClose } = useHeaderDrawer(props);

  return (
    <DrawerSC {...props} anchor="left">
      <CloseButtonSC variant="outlined" onClick={handleClose}>
        <CloseIocn />
      </CloseButtonSC>
      <ContainerSC>
        <HeaderNav callbackClose={callbackClose} />
        <HeaderActions />
      </ContainerSC>
    </DrawerSC>
  );
};

const { DrawerSC, CloseButtonSC, ContainerSC } = styles;

export default React.memo(HeaderDrawer);
