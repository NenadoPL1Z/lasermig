import React from "react";
import { Button, styled, Typography } from "@mui/material";
import ColorScheme from "@/styles/theme/ColorScheme";
import ModalContainer from "@/UI/Modals/ModalContainer";
import { ModalContentProps } from "@/UI/Modals/types";
import { Breakpoints } from "@/styles/theme/Breakpoints";
import CloseIcon from "@/assets/icons/CloseIocn.svg";

const ModalContent = ({ title, subtitle, ...props }: ModalContentProps) => {
  const { isSuccess, children } = props;

  return (
    <ModalContainer {...props}>
      <ContainerSC>
        <WrapperSC>
          <TitleContainerSC>
            <TitleSC variant="h4">{title}</TitleSC>
            {!isSuccess && (
              <TitleButtonSC onClick={props.handleClose}>
                <CloseIcon />
              </TitleButtonSC>
            )}
          </TitleContainerSC>
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
    </ModalContainer>
  );
};

const ContainerSC = styled("div")`
  height: 100%;
  padding: 40px;

  display: flex;
  justify-content: flex-end;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    padding: 16px;
  }
`;

const WrapperSC = styled("div")`
  width: 100%;
  max-width: 520px;

  display: flex;
  flex-direction: column;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    max-width: none;
  }
`;

const TitleContainerSC = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TitleSC = styled(Typography)`
  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    padding: 8px 0 4px;
  }
`;

const TitleButtonSC = styled(Button)`
  @media (min-width: ${Breakpoints.BIG_TABLET}px) {
    display: none;
  }
`;

const SubtitleSC = styled("p")<Pick<ModalContentProps, "isSuccess">>`
  margin-top: 16px;
  color: ${ColorScheme.TERTIARY};
  font-size: 20px;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    margin-top: ${({ isSuccess }) => (isSuccess ? "24px" : "12px")};
    font-size: 14px;
  }
`;

const ChildSC = styled("div")`
  flex-grow: 1;

  margin-top: 32px;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    margin-top: 24px;
  }
`;

const DescSC = styled("p")`
  margin-top: 16px;

  color: ${ColorScheme.TERTIARY};
  font-size: 12px;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    margin-top: 8px;
  }
`;

export default React.memo(ModalContent);
