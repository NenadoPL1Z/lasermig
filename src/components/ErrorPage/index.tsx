import React from "react";
import { styles } from "@/components/ErrorPage/index.styles";
import { ErrorPageProps } from "@/components/ErrorPage/types";

const ErrorPage = ({ title, errorImage, children }: ErrorPageProps) => {
  return (
    <ContainerSC errorImage={errorImage} className="content content-br">
      <TextContentSC>
        <TitlesSC variant="h1">{title}</TitlesSC>
        {children}
      </TextContentSC>
    </ContainerSC>
  );
};

const { ContainerSC, TextContentSC, TitlesSC } = styles;

export default React.memo(ErrorPage);
