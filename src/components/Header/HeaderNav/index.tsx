import React from "react";
import { navData } from "@/lib/mock/navData";
import { styles } from "@/components/Header/HeaderNav/index.styles";

interface HeaderNavProps {
  callbackClose?: (path: string) => () => void;
}

const HeaderNav = ({ callbackClose = () => () => {} }: HeaderNavProps) => {
  return (
    <NavSC>
      <UlSC>
        {navData.map((item) => (
          <LiSC key={item.path}>
            <CustomLinkSC onClick={callbackClose(item.path)} href={item.path}>
              {item.title}
            </CustomLinkSC>
          </LiSC>
        ))}
      </UlSC>
    </NavSC>
  );
};

const { NavSC, UlSC, LiSC, CustomLinkSC } = styles;

export default React.memo(HeaderNav);
