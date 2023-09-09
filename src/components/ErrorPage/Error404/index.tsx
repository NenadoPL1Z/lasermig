import React from "react";
import { DefaultButton } from "@/UI/Buttons/DefaultButton";
import ErrorPage from "@/components/ErrorPage";
import { styles } from "@/components/ErrorPage/Error404/index.styles";

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

const { DescSC } = styles;
export default React.memo(Error404);
