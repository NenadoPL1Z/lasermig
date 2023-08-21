import React from "react";
import { DefaultButton } from "@/UI/Buttons/DefaultButton";
import { ModalSuccessProps } from "@/UI/Modals/types";

const ModalSuccess = ({ handleClose }: ModalSuccessProps) => {
  return <DefaultButton onClick={handleClose}>закрыть</DefaultButton>;
};

export default React.memo(ModalSuccess);
