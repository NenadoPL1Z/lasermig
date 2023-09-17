import React from "react";
import FooterInfo from "@/components/Footer/FooterInfo";
import FooterAction from "@/components/Footer/FooterAction";
import FooterNav from "@/components/Footer/FooterNav";
import FooterMoore from "@/components/Footer/FooterMoore/FooterMoore";
import { styles } from "@/components/Footer/index.styles";
import { Mobile } from "@/UI/Mobile";
import { useRouter } from "next/router";

const Footer = () => {
  const { pathname } = useRouter();
  const isProduct = pathname == "/catalog/[slug]/[id]";

  return (
    <FooterSC
      isBottom={isProduct}
      className="container-three disable-mobile-safe">
      <FooterWrapperSC className="content">
        <FooterInfo />
        <FooterNav />
        <FooterAction />
        <Mobile>
          <FooterMoore />
        </Mobile>
      </FooterWrapperSC>
    </FooterSC>
  );
};

const { FooterSC, FooterWrapperSC } = styles;

export default React.memo(Footer);
