import React from "react";
import { styled, Typography } from "@mui/material";
import ColorScheme from "@/styles/theme/ColorScheme";
import ModalContainer from "@/UI/Modals/ModalContainer";
import { ModalContentProps } from "@/UI/Modals/types";

const ModalContent = ({ title, subtitle, ...props }: ModalContentProps) => {
  const { isSuccess, children } = props;

  return (
    <ModalContainer {...props}>
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
    </ModalContainer>
  );
};

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
