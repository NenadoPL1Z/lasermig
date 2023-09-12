import React from "react";
import { navData } from "@/lib/mock/navData";
import { styles } from "@/components/Header/HeaderNav/index.styles";
import { useRouter } from "next/router";

interface HeaderNavProps {
  callbackClose?: (path: string) => () => void;
}

const HeaderNav = ({ callbackClose = () => () => {} }: HeaderNavProps) => {
  const { pathname } = useRouter();
  const path = `/${pathname.split("/")[1]}`;

  const checkActive = (headerPath: string) => {
    return path === headerPath;
  };

  return (
    <NavSC>
      <UlSC>
        {navData.map((item) => (
          <LiSC key={item.path}>
            <CustomLinkSC
              isActive={checkActive(item.path)}
              onClick={callbackClose(item.path)}
              href={item.path}>
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
