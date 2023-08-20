import React from "react";
import { Button } from "@mui/material";

interface ModalSuccessProps {
  // eslint-disable-next-line
  handleClose: any;
}

const ModalSuccess = ({ handleClose }: ModalSuccessProps) => {
  return <Button onClick={handleClose}>закрыть</Button>;
};

export default React.memo(ModalSuccess);
