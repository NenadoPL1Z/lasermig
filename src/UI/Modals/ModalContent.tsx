import React from "react";
import { ChildrenProps } from "@/types/types";
import styled, { css } from "styled-components";
import { Dialog, DialogProps, Typography } from "@mui/material";
import ColorScheme from "@/styles/theme/ColorScheme";

interface ModalContentProps extends ChildrenProps {
  title: string;
  subtitle?: string;
  isSuccess?: boolean;
  dialogProps: DialogProps;
}

const ModalContent = ({
  title,
  subtitle,
  dialogProps,
  isSuccess,
  children,
}: ModalContentProps) => {
  return (
    <DialogSC isSuccess={isSuccess} {...dialogProps}>
      <ContainerSC>
        <WrapperSC>
          <TitleSC variant="h4">{title}</TitleSC>
          {subtitle && <SubtitleSC>{subtitle}</SubtitleSC>}
          <ChildSC>{children}</ChildSC>
          {!isSuccess && (
            <DescSC>
              Нажимая кнопку “Отправить”, Вы даете информированное согласие на
              обработку своих персональных данных
            </DescSC>
          )}
        </WrapperSC>
      </ContainerSC>
    </DialogSC>
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
`;

const DescSC = styled("p")`
  margin-top: 16px;
  color: ${ColorScheme.TERTIARY};
  font-size: 12px;
`;

export default React.memo(ModalContent);
