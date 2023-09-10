import React from "react";
import { useCopy } from "@/UI/Copy/useCopy";
import { styles } from "@/UI/Copy/index.styles";
import { CopyProps } from "@/UI/Copy/types";

const Copy = (props: CopyProps) => {
  const { isCopy, handleClick } = useCopy(props);

  return (
    <ContainerSC>
      {isCopy && (
        <TooltipSC>
          <TooltipTextSC>Ссылка на новость скопирована</TooltipTextSC>
        </TooltipSC>
      )}
      <CopyButtonSC onClick={handleClick}>
        Поделиться <SharedIconSC />
      </CopyButtonSC>
    </ContainerSC>
  );
};

const { ContainerSC, CopyButtonSC, SharedIconSC, TooltipSC, TooltipTextSC } =
  styles;

export default React.memo(Copy);
