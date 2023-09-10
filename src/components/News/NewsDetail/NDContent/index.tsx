import React from "react";
import { NDContentProps } from "@/components/News/NewsDetail/types";
import { styles } from "@/components/News/NewsDetail/NDContent/index.styles";

const NDContent = ({ description }: NDContentProps) => {
  return (
    <ContainerSC
      className="container-two"
      dangerouslySetInnerHTML={{ __html: description }}
    />
  );
};

const { ContainerSC } = styles;

export default React.memo(NDContent);
