import React from "react";
import ErrorPage from "@/components/ErrorPage";
import { styles } from "@/components/ErrorPage/Error404/index.styles";

const Error404 = () => {
  return (
    <ErrorPage title="Страница не найдена" errorImage="404">
      <DescSC>
        Страница, которую вы ищете, не существует или была удалена
      </DescSC>
      <ButtonSC fullWidth={false} href="/">
        На главную страницу
      </ButtonSC>
    </ErrorPage>
  );
};

const { DescSC, ButtonSC } = styles;
export default React.memo(Error404);
