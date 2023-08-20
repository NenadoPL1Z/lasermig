import React from "react";
import styled from "styled-components";
import ColorScheme from "@/styles/theme/ColorScheme";

const FooterMoore = () => {
  return (
    <>
      <PolicySC>Политика конфиденциальности</PolicySC>
      <AllRightSC>
        Лазермиг, все права защищены, {new Date().getFullYear()}
      </AllRightSC>
    </>
  );
};

const PolicySC = styled("div")`
  color: ${ColorScheme.TERTIARY};
  font-size: 18px;
  margin-bottom: 10px;
`;
const AllRightSC = styled("div")`
  color: ${ColorScheme.TERTIARY};
  font-size: 18px;
`;

export default React.memo(FooterMoore);
