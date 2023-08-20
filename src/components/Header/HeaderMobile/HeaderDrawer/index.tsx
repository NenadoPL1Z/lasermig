import React from "react";
import { Button, Drawer, DrawerProps } from "@mui/material";
import { styled } from "@mui/material";
import HeaderNav from "@/components/Header/HeaderNav";
import HeaderActions from "@/components/Header/HeaderActions";
import { Breakpoints } from "@/styles/theme/Breakpoints";
import CloseIocn from "@/assets/icons/CloseIocn.svg";
import { useRouter } from "next/router";

const HeaderDrawer = (props: Omit<DrawerProps, "anchor">) => {
  const { pathname } = useRouter();
  const { onClose } = props;

  const handleClose = () => {
    if (onClose) {
      // eslint-disable-next-line
      (onClose as any)();
    }
  };

  const callbackClose = (path: string) => {
    return () => {
      const isScrollTop = path === pathname;
      handleClose();

      if (isScrollTop) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };
  };

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

const DrawerSC = styled(Drawer)`
  @media (min-width: ${Breakpoints.BIG_TABLET}px) {
    display: none;
  }

  .MuiPaper-root {
    width: 70%;
    max-width: 230px;

    border-top-right-radius: 24px;
    border-bottom-right-radius: 24px;
  }
`;

const ContainerSC = styled("div")`
  height: 100%;
  padding: 8px 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 25px;
`;

const CloseButtonSC = styled(Button)`
  position: absolute;
  top: 8px;
  right: 16px;
`;

export default React.memo(HeaderDrawer);
