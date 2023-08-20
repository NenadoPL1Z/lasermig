import React from "react";
import styled from "styled-components";
import { Typography } from "@mui/material";

const ErrorPage = () => {
  return (
    <ContainerSC className="content content-bg">
      <TitlesSC variant="h1">Страница не найдена</TitlesSC>
    </ContainerSC>
  );
};

const ContainerSC = styled("section")`
  margin: 50px 0;
`;

const TitlesSC = styled(Typography)`
  max-width: 509px;
  margin-bottom: 16px;
`;

export default React.memo(ErrorPage);
