import React from "react";
import { DefaultButton } from "@/UI/Buttons/DefaultButton";

interface ModalSuccessProps {
  // eslint-disable-next-line
  handleClose: any;
}

const ModalSuccess = ({ handleClose }: ModalSuccessProps) => {
  return <DefaultButton onClick={handleClose}>закрыть</DefaultButton>;
};

export default React.memo(ModalSuccess);
