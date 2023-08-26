import React, { useState } from "react";
import { styled } from "@mui/material";
import { DefaultButton } from "@/UI/Buttons/DefaultButton";
import ColorScheme from "@/styles/theme/ColorScheme";
import { FontNamespace } from "@/styles/theme/FontNamespace";
import { Breakpoints } from "@/styles/theme/Breakpoints";
import ModalQuestion from "@/UI/Modals/variant/ModalQuestion";

const Questions = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <ContainerSC className="content content-br">
        <TextSC>
          <TitleSC>Остались вопросы?</TitleSC>
          <DescSC>Напишите вопрос нам, и мы обязательно вам ответим!</DescSC>
        </TextSC>
        <DefaultButton onClick={() => setIsOpen(true)}>
          Задать вопрос
        </DefaultButton>
      </ContainerSC>
      <ModalQuestion isOpen={isOpen} handleClose={() => setIsOpen(false)} />
    </>
  );
};

const ContainerSC = styled("section")`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: ${ColorScheme.PRIMARY};

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const TextSC = styled("div")``;

const TitleSC = styled("h3")`
  margin-bottom: 16px;

  color: ${ColorScheme.WHITE};
  font-family: ${FontNamespace.BN};

  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    margin-bottom: 8px;
    font-size: 32px;
  }
`;
const DescSC = styled("p")`
  color: ${ColorScheme.TERTIARY};
  font-family: ${FontNamespace.SF};

  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    font-size: 14px;
    margin-bottom: 32px;
  }
`;

export default React.memo(Questions);
