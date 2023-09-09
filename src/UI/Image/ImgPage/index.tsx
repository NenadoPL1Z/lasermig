import React from "react";
import { ImgPageProps } from "@/UI/Image/ImgPage/types";
import { styles } from "@/UI/Image/ImgPage/index.styles";

const ImgPage = ({ url, children }: ImgPageProps) => {
  return (
    <ContainerSC url={url} className="content content-br">
      {children}
      <ShadowBackgroundSC />
    </ContainerSC>
  );
};

const { ContainerSC, ShadowBackgroundSC } = styles;

export default React.memo(ImgPage);
