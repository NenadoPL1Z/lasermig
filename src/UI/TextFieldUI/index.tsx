import React from "react";
import { TextField, TextFieldProps } from "@mui/material";
import { styled } from "@mui/material";
import ColorScheme from "@/styles/theme/ColorScheme";

const TextFieldUI = (props: TextFieldProps) => {
  const isError = !!props.error;
  return <TextFieldSC isError={isError} {...props} />;
};

const TextFieldSC = styled(TextField)<{ isError: boolean }>`
  .MuiInputBase-root {
    &::before {
      border-bottom-color: ${({ isError }) =>
        isError ? ColorScheme.ERROR : ColorScheme.TERTIARY} !important;
    }
  }
  .MuiInputBase-input {
    &::placeholder {
      color: ${({ isError }) =>
        isError ? ColorScheme.ERROR : ColorScheme.TERTIARY};
      opacity: 1;
    }
  }
`;

export default React.memo(TextFieldUI);
