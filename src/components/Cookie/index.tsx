import React from "react";
import { DefaultButton } from "@/UI/Buttons/DefaultButton";
import { styles } from "@/components/Cookie/index.styles";
import { useCookie } from "@/components/Cookie/useCookie";
import { StaticNamespace } from "@/lib/constants/namespaces/StaticNamespace";

const Cookie = () => {
  const { isVisible, handleClick } = useCookie();

  if (!isVisible) {
    return null;
  }

  return (
    <ContainerSC>
      <WrapperSC className="content content-br">
        <TextSC>
          Мы используем cookie. Продолжая пользоваться сайтом, вы соглашаетесь
          на обработку персональных данных в соответствии с{" "}
          <SpanSC>
            <a href={StaticNamespace.POLICY}>политикой конфиденциальности</a>
          </SpanSC>
        </TextSC>
        <DefaultButton onClick={handleClick}>Принять</DefaultButton>
      </WrapperSC>
    </ContainerSC>
  );
};

const { ContainerSC, WrapperSC, TextSC, SpanSC } = styles;

export default React.memo(Cookie);
