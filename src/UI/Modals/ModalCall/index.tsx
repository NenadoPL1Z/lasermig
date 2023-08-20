import React from "react";
import { DialogProps } from "@mui/material";
import ModalContent from "@/UI/Modals/ModalContent";
import ModalCallForm from "@/UI/Modals/ModalCall/ModalCallForm/ModalCallForm";

export type ModalCallProps = Omit<DialogProps, "children">;
const ModalCall = (props: ModalCallProps) => {
  return (
    <ModalContent dialogProps={props} title="Заказать звонок">
      {props.open && <ModalCallForm />}
    </ModalContent>
  );
};

export default React.memo(ModalCall);
