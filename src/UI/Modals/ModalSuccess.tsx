import React from "react";
import { DefaultButton } from "@/UI/Buttons/DefaultButton";
import { ModalSuccessProps } from "@/UI/Modals/types";
import { styled } from "@mui/material";
import { Breakpoints } from "@/styles/theme/Breakpoints";

const ModalSuccess = ({ handleClose }: ModalSuccessProps) => {
  return <DefaultButtonSC onClick={handleClose}>закрыть</DefaultButtonSC>;
};

const DefaultButtonSC = styled(DefaultButton)`
  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    width: 100%;
    max-width: none;
  }
`;

export default React.memo(ModalSuccess);
