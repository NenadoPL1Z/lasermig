import React from "react";
import { styled } from "@mui/material";
import ColorScheme from "@/styles/theme/ColorScheme";
import { ChildrenProps } from "@/types/types";
import { Breakpoints } from "@/styles/theme/Breakpoints";

interface ImgPageProps extends ChildrenProps {
  url: string;
}

const ImgPage = ({ url, children }: ImgPageProps) => {
  return (
    <ContainerSC url={url} className="content content-bg">
      {children}
      <ShadowBG />
    </ContainerSC>
  );
};

const ContainerSC = styled("div")<Pick<ImgPageProps, "url">>`
  position: relative;

  width: 100%;
  height: 670px;

  display: flex;
  align-items: flex-end;

  overflow: hidden;

  background-color: ${ColorScheme.PRIMARY};
  background-repeat: no-repeat;
  background-image: url(${({ url }) => url});

  background-size: cover;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    height: 409px;

    background-size: auto 409px;
    background-position: 63%;
  }
`;

const ShadowBG = styled("div")`
  width: 100%;
  height: 100%;

  position: absolute;
  left: 0;
  bottom: 0;

  background-image: url("/assets/images/shadowBG.png");
  background-repeat: no-repeat;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    background-image: url("/assets/images/shadowBGMobile.png");
    background-size: 100%;
  }
`;

export default React.memo(ImgPage);
