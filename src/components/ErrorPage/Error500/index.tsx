import React from "react";
import ErrorPage from "@/components/ErrorPage";
import { DefaultButton } from "@/UI/Buttons/DefaultButton";
import { useRouter } from "next/router";
import { styles } from "@/components/ErrorPage/Error500/index.styles";

const Error500 = () => {
  const { pathname, push, reload } = useRouter();
  const is500Page = pathname == "/500";

  const onClick = is500Page ? () => push("/") : reload;
  const buttonTitle = is500Page ? "На главную" : "Перезагрузить";

  return (
    <ErrorPage title="Что-то пошло не так" errorImage="500">
      <DescSC>
        Мы уже устраняем неисправность, попробуйте обновить страницу через
        некоторое время. Приносим извинения за временные неудобства.
      </DescSC>
      <DefaultButton onClick={onClick}>{buttonTitle}</DefaultButton>
    </ErrorPage>
  );
};

const { DescSC } = styles;

export default React.memo(Error500);
