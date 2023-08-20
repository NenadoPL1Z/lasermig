import React from "react";
import { headerData } from "@/lib/mock/headerData";
import { LinkSC } from "@/UI/LinkSC";
import styled from "styled-components";
import { Breakpoints } from "@/styles/theme/Breakpoints";
import ColorScheme from "@/styles/theme/ColorScheme";

interface HeaderNavProps {
  callbackClose?: (path: string) => () => void;
}

const HeaderNav = ({ callbackClose = () => () => {} }: HeaderNavProps) => {
  return (
    <NavSC>
      <UlSC>
        {headerData.map((item) => (
          <LiSC key={item.path}>
            <CustomLinkSC
              onClick={callbackClose(item.path)}
              className="mobile-safe"
              href={item.path}>
              {item.title}
            </CustomLinkSC>
          </LiSC>
        ))}
      </UlSC>
    </NavSC>
  );
};

const NavSC = styled("nav")`
  padding-top: 6px;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    margin-bottom: 60px;
  }
`;

const UlSC = styled("ul")`
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;

  & > *:last-child {
    margin-right: 0;
  }

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    flex-direction: column;
    align-items: flex-start;

    & > *:last-child {
      margin-bottom: 0;
    }
  }
`;

const LiSC = styled("li")`
  margin-right: 40px;

  @media (max-width: ${Breakpoints.NOTEBOOK}px) {
    margin-right: 20px;
  }

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    width: 100%;

    margin-right: 0;
  }
`;

const CustomLinkSC = styled(LinkSC)`
  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    display: block;

    padding: 12px 0;

    font-size: 20px;
    color: ${ColorScheme.MAIN};
  }
`;

export default React.memo(HeaderNav);
