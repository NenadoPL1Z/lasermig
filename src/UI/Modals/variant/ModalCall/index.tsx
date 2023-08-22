import React, { useState } from "react";
import ModalContent from "@/UI/Modals/ModalContent";
import ModalSuccess from "@/UI/Modals/ModalSuccess";
import { AllModalProps } from "@/UI/Modals/types";
import ModalCallForm from "@/UI/Modals/variant/ModalCall/ModalCallForm/ModalCallForm";

const ModalCall = (props: AllModalProps) => {
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const title = isSuccess ? "Ваша заявка получена" : "Заказать звонок";
  const subtitle = isSuccess
    ? "В ближайшее время наш менеджер свяжется с вами для уточнения деталей"
    : "";

  const handleSuccess = () => {
    setIsSuccess(true);
  };

  return (
    <ModalContent
      title={title}
      subtitle={subtitle}
      isSuccess={isSuccess}
      {...props}>
      {!isSuccess && <ModalCallForm handleSuccess={handleSuccess} />}
      {isSuccess && <ModalSuccess handleClose={props.handleClose} />}
    </ModalContent>
  );
};

export default React.memo(ModalCall);
