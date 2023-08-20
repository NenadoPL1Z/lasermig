import React from "react";
import { ChildrenProps } from "@/types/types";
import styled from "styled-components";
import { Dialog, DialogProps, Typography } from "@mui/material";
import ColorScheme from "@/styles/theme/ColorScheme";

interface ModalContentProps extends ChildrenProps {
  title: string;
  subtitle?: string;
  dialogProps: DialogProps;
}

const ModalContent = ({
  title,
  subtitle,
  dialogProps,
  children,
}: ModalContentProps) => {
  return (
    <DialogSC {...dialogProps}>
      <ContainerSC>
        <WrapperSC>
          <TitleSC variant="h4">{title}</TitleSC>
          {subtitle && <SubtitleSC>{subtitle}</SubtitleSC>}
          <ChildSC>{children}</ChildSC>
          <DescSC>
            Нажимая кнопку “Отправить”, Вы даете информированное согласие на
            обработку своих персональных данных
          </DescSC>
        </WrapperSC>
      </ContainerSC>
    </DialogSC>
  );
};

const DialogSC = styled(Dialog)`
  .MuiBackdrop-root {
    background-color: ${ColorScheme.BACKDOOR};
  }
  .MuiPaper-root {
    width: 100%;
    height: 100%;
    max-width: 1100px;
    max-height: 452px;

    box-shadow: none !important;
    border-radius: 50px;

    background-color: ${ColorScheme.PRIMARY};
    background-image: url(/assets/images/ModalBg.png);
    background-repeat: no-repeat;
    background-position: left bottom;
  }
`;

const ContainerSC = styled("div")`
  height: 100%;
  padding: 40px;

  display: flex;
  justify-content: flex-end;
`;

const WrapperSC = styled("div")`
  width: 100%;
  max-width: 520px;

  display: flex;
  flex-direction: column;
`;

const TitleSC = styled(Typography)`
  margin-bottom: 16px;
`;

const SubtitleSC = styled("p")`
  color: ${ColorScheme.TERTIARY};
  font-size: 20px;
`;

const ChildSC = styled("div")`
  flex-grow: 1;

  margin-top: 32px;
  margin-bottom: 16px;
`;

const DescSC = styled("p")`
  color: ${ColorScheme.TERTIARY};
  font-size: 12px;
`;

export default React.memo(ModalContent);
