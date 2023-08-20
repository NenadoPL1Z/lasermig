import React, { useState } from "react";
import { DialogProps } from "@mui/material";
import ModalContent from "@/UI/Modals/ModalContent";
import ModalCallForm from "@/UI/Modals/ModalCall/ModalCallForm/ModalCallForm";
import ModalSuccess from "@/UI/Modals/ModalSuccess";

export type ModalCallProps = Omit<DialogProps, "children">;
const ModalCall = (props: ModalCallProps) => {
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const handleSuccess = () => {
    setIsSuccess(true);
  };

  return (
    <>
      <ModalContent
        title={isSuccess ? "Ваша заявка получена" : "Заказать звонок"}
        subtitle={
          isSuccess
            ? "В ближайшее время наш менеджер свяжется с вами для уточнения деталей"
            : ""
        }
        isSuccess={isSuccess}
        dialogProps={props}>
        {!isSuccess && <ModalCallForm handleSuccess={handleSuccess} />}
        {isSuccess && <ModalSuccess handleClose={props.onClose} />}
      </ModalContent>
    </>
  );
};

export default React.memo(ModalCall);
