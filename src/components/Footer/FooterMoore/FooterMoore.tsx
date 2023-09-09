import React from "react";
import { headData } from "@/lib/mock/headData";
import { styles } from "@/components/Footer/FooterMoore/index.styles";

const FooterMoore = () => {
  return (
    <>
      <PolicySC>Политика конфиденциальности</PolicySC>
      <AllRightSC>
        {headData.license}, {new Date().getFullYear()}
      </AllRightSC>
    </>
  );
};

const { PolicySC, AllRightSC } = styles;

export default React.memo(FooterMoore);
