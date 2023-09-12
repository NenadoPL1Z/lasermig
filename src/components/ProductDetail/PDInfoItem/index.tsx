import React, { useState } from "react";
import { ChildrenProps } from "@/types/types";
import { styles } from "@/components/ProductDetail/PDInfoItem/index.styles";

interface PDInfoItemProps extends ChildrenProps {
  title: string;
  initialOpen?: boolean;
}

const PDInfoItem = ({
  title,
  initialOpen = false,
  children,
}: PDInfoItemProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(initialOpen);

  return (
    <ContainerSC>
      <HeaderSC onClick={() => setIsOpen((prevState) => !prevState)}>
        <TitleSC>{title}</TitleSC>
        {isOpen && <ArrowDownSC />}
        {!isOpen && <ArrowUPSC />}
      </HeaderSC>
      <CollapseSC in={isOpen}>{children}</CollapseSC>
    </ContainerSC>
  );
};

const { ContainerSC, HeaderSC, TitleSC, ArrowDownSC, ArrowUPSC, CollapseSC } =
  styles;

export default React.memo(PDInfoItem);
