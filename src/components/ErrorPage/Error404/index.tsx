import React from "react";
import { DefaultButton } from "@/UI/Buttons/DefaultButton";
import { styled, Typography } from "@mui/material";
import ColorScheme from "@/styles/theme/ColorScheme";
import { Breakpoints } from "@/styles/theme/Breakpoints";
import ErrorPage from "@/components/ErrorPage";

const Error404 = () => {
  return (
    <ErrorPage title="Страница не найдена" errorImage="404">
      <DescSC>
        Страница, которую вы ищете, не существует или была удалена
      </DescSC>
      <DefaultButton href="/">На главную страницу</DefaultButton>
    </ErrorPage>
  );
};

const DescSC = styled(Typography)`
  max-width: 427px;

  color: ${ColorScheme.PRIMARY};
  margin-bottom: 32px;

  font-size: 20px;
  line-height: normal;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    font-size: 14px;
    margin-bottom: 16px;
  }
`;

export default React.memo(Error404);
