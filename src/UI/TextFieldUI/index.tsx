import React from "react";
import { TextField, TextFieldProps } from "@mui/material";
import styled from "styled-components";
import ColorScheme from "@/styles/theme/ColorScheme";

const Index = (props: TextFieldProps) => {
  const isError = !!props.error;
  return <TextFieldSC isError={isError} sx={{ color: "red" }} {...props} />;
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
    }
  }
  .MuiFormHelperText-root {
    color: ${ColorScheme.ERROR};

    font-family: SF, sans-serif;
    font-size: 12px;
    font-weight: 400;
    line-height: normal;

    position: absolute;
    bottom: -20px;
  }
`;

export default React.memo(Index);
