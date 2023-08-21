import React from "react";
import ErrorPage from "@/components/ErrorPage";
import { Typography } from "@mui/material";
import { styled } from "@mui/material";
import ColorScheme from "@/styles/theme/ColorScheme";
import { Breakpoints } from "@/styles/theme/Breakpoints";
import TitleLayout from "@/layout/TitleLayout";
import { DefaultButton } from "@/UI/Buttons/DefaultButton";

const Index = () => {
  return (
    <TitleLayout title="404">
      <ErrorPage errorImage="404">
        <DescSC>
          Страница, которую вы ищете, не существует или была удалена
        </DescSC>
        <DefaultButton href="/">На главную страницу</DefaultButton>
      </ErrorPage>
    </TitleLayout>
  );
};

const DescSC = styled(Typography)`
  color: ${ColorScheme.PRIMARY};
  margin-bottom: 32px;

  font-size: 20px;
  line-height: normal;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    font-size: 14px;
  }
`;

export default React.memo(Index);
