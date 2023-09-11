import React from "react";
import { headData } from "@/lib/mock/headData";
import { styles } from "@/components/Footer/FooterMoore/index.styles";
import { StaticNamespace } from "@/lib/constants/namespaces/StaticNamespace";

const FooterMoore = () => {
  return (
    <>
      <PolicySC>
        <a href={StaticNamespace.POLICY}>Политика конфиденциальности</a>
      </PolicySC>
      <AllRightSC>
        {headData.license}, {new Date().getFullYear()}
      </AllRightSC>
    </>
  );
};

const { PolicySC, AllRightSC } = styles;

export default React.memo(FooterMoore);
