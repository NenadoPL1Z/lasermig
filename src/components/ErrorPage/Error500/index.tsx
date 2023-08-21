import React from "react";
import ErrorPage from "@/components/ErrorPage";
import { DefaultButton } from "@/UI/Buttons/DefaultButton";
import { styled, Typography } from "@mui/material";
import ColorScheme from "@/styles/theme/ColorScheme";
import { Breakpoints } from "@/styles/theme/Breakpoints";
import { useRouter } from "next/router";

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

const DescSC = styled(Typography)`
  max-width: 469px;

  color: ${ColorScheme.PRIMARY};
  margin-bottom: 16px;

  font-size: 20px;
  line-height: normal;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    font-size: 14px;
  }
`;

export default React.memo(Error500);
