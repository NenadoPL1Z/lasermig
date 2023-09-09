import React from "react";
import { DefaultButton } from "@/UI/Buttons/DefaultButton";
import ModalQuestion from "@/UI/Modals/variant/ModalQuestion";
import { styles } from "@/components/Questions/index.styles";
import { useToggle } from "@/hooks/useToggle";

const Questions = () => {
  const { isOpen, handleOpen, handleClose } = useToggle();

  return (
    <>
      <ContainerSC className="content content-br">
        <TextSC>
          <TitleSC>Остались вопросы?</TitleSC>
          <DescSC>Напишите вопрос нам, и мы обязательно вам ответим!</DescSC>
        </TextSC>
        <DefaultButton onClick={handleOpen}>Задать вопрос</DefaultButton>
      </ContainerSC>
      <ModalQuestion isOpen={isOpen} handleClose={handleClose} />
    </>
  );
};

const { ContainerSC, TextSC, TitleSC, DescSC } = styles;

export default React.memo(Questions);
