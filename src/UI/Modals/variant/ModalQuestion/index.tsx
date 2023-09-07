import React, { useState } from "react";
import ModalContent from "@/UI/Modals/ModalContent";
import ModalSuccess from "@/UI/Modals/ModalSuccess";
import { AllModalProps } from "@/UI/Modals/types";
import ModalQuestionForm from "@/UI/Modals/variant/ModalQuestion/ModalQuestionForm/ModalQuestionForm";

const ModalQuestion = (props: AllModalProps) => {
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const title = isSuccess ? "Ваш вопрос получен" : "Остались вопросы?";
  const subtitle = isSuccess
    ? "В ближайшее время наш менеджер свяжется с вами для уточнения деталей"
    : "Напишите вопрос нам, и мы обязательно вам ответим!";

  const handleSuccess = () => {
    setIsSuccess(true);
  };

  return (
    <ModalContent
      title={title}
      subtitle={subtitle}
      isSuccess={isSuccess}
      {...props}>
      {!isSuccess && <ModalQuestionForm handleSuccess={handleSuccess} />}
      {isSuccess && <ModalSuccess handleClose={props.handleClose} />}
    </ModalContent>
  );
};

export default React.memo(ModalQuestion);
