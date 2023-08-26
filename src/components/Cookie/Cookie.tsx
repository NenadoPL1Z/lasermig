import React, { useEffect, useState } from "react";
import { styled } from "@mui/material";
import ColorScheme from "@/styles/theme/ColorScheme";
import { FontNamespace } from "@/styles/theme/FontNamespace";
import { DefaultButton } from "@/UI/Buttons/DefaultButton";
import { ZIndex } from "@/styles/theme/ZIndex";
import { Breakpoints } from "@/styles/theme/Breakpoints";

const Cookie = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    setIsVisible(!localStorage.getItem("@cookie"));
  }, []);

  const onClick = () => {
    localStorage.setItem("@cookie", "true");
    setIsVisible(false);
  };

  return (
    <>
      {isVisible && (
        <ContainerSC>
          <WrapperSC className="content content-br">
            <TextSC>
              Мы используем cookie. Продолжая пользоваться сайтом, вы
              соглашаетесь на обработку персональных данных в соответствии с{" "}
              <SpanSC>политикой конфиденциальности</SpanSC>
            </TextSC>
            <DefaultButton onClick={onClick}>Принять</DefaultButton>
          </WrapperSC>
        </ContainerSC>
      )}
    </>
  );
};

const ContainerSC = styled("div")`
  position: fixed;

  bottom: 24px;
  left: 16px;
  right: 16px;
  z-index: ${ZIndex.OVER_TWO};

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    bottom: 16px;
  }
`;

const WrapperSC = styled("div")`
  width: 450px;
  background-color: ${ColorScheme.PRIMARY};

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    width: 100%;
  }
`;

const TextSC = styled("p")`
  margin-bottom: 24px;

  color: ${ColorScheme.WHITE};
  font-family: ${FontNamespace.SF};

  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    font-size: 12px;
    margin-bottom: 16px;
  }
`;
const SpanSC = styled("a")`
  color: ${ColorScheme.ACCENT};
`;

export default React.memo(Cookie);
