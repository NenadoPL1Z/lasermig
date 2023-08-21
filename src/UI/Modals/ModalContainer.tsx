import React from "react";
import { ModalContainerProps, ModalContentProps } from "@/UI/Modals/types";
import { css, Dialog, Drawer, styled } from "@mui/material";
import ColorScheme from "@/styles/theme/ColorScheme";
import { useMobile } from "@/hooks/useMedia";

const ModalContainer = ({
  children,
  isSuccess,
  isOpen,
  handleClose,
}: ModalContainerProps) => {
  const isMobile = useMobile();
  const Container = isMobile ? DrawerSC : DialogSC;

  return (
    <Container
      anchor="bottom"
      open={isOpen}
      onClose={handleClose}
      isSuccess={isSuccess}>
      {children}
    </Container>
  );
};

const DialogSC = styled(Dialog)<Pick<ModalContentProps, "isSuccess">>`
  .MuiBackdrop-root {
    background-color: ${ColorScheme.BACKDOOR};
  }
  .MuiPaper-root {
    width: 100%;
    max-height: none;

    box-shadow: none !important;
    border-radius: 50px;

    background-color: ${ColorScheme.PRIMARY};
    background-repeat: no-repeat;

    ${({ isSuccess }) =>
      !isSuccess
        ? css`
            max-width: 1100px;
            background-image: url(/assets/images/ModalBg.png);
            background-position: left bottom;
          `
        : css`
            max-width: 870px;
            background-image: url(/assets/images/ModalSuccessBg.png);
            background-position: left top;
          `}
  }
`;

const DrawerSC = styled(Drawer)<Pick<ModalContentProps, "isSuccess">>`
  .MuiBackdrop-root {
    background-color: ${ColorScheme.BACKDOOR};
  }
  .MuiPaper-root {
    background-color: ${ColorScheme.PRIMARY};
    border-radius: 24px 24px 0 0;
    box-shadow: none;
  }
`;

export default React.memo(ModalContainer);
