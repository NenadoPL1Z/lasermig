import React from "react";
import { styled } from "@mui/material";
import { Breakpoints } from "@/styles/theme/Breakpoints";
import ColorScheme from "@/styles/theme/ColorScheme";
import { FontNamespace } from "@/styles/theme/FontNamespace";
import { ZIndex } from "@/styles/theme/ZIndex";
import TextsList from "@/UI/TextsList/TextsList";
import ImgPage from "@/UI/Image/ImgPage";
import { aboutPageData } from "@/lib/mock/aboutPageData";
import { H2SC } from "@/UI/H2SC";
import { ParagraphSC } from "@/UI/ParagraphSC";
import TitleLayout from "@/layout/TitleLayout";
import Questions from "@/components/Questions";

const About = () => {
  return (
    <TitleLayout title="О НАС">
      <ContainerImageSC>
        <ImgPage url={aboutPageData.image}>
          <TitleSC>{aboutPageData.title}</TitleSC>
        </ImgPage>
      </ContainerImageSC>
      <ContainerInfoSC className="container-two">
        <H2SC className="content-title">{aboutPageData.titleList}</H2SC>
        <TextsList
          item={aboutPageData.list.items}
          variant={aboutPageData.list.variant as "number"}
        />
        <ParagraphSC className="content-margin48">
          {aboutPageData.desc};
        </ParagraphSC>
        <ParagraphSC className="content-margin48">
          {aboutPageData.desc2};
        </ParagraphSC>
        <ParagraphSC className="content-margin48">
          {aboutPageData.desc3};
        </ParagraphSC>
        <ParagraphSC className="content-margin48">
          {aboutPageData.desc4};
        </ParagraphSC>
      </ContainerInfoSC>
      <Questions />
    </TitleLayout>
  );
};

const ContainerImageSC = styled("section")`
  margin-bottom: 50px;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    margin-bottom: 32px;
  }
`;

const TitleSC = styled("h1")`
  color: ${ColorScheme.WHITE};
  font-family: ${FontNamespace.BN};

  font-size: 82px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  margin: 0;
  z-index: ${ZIndex.OVER};

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    font-size: 36px;
  }
`;

const ContainerInfoSC = styled("section")``;

export default React.memo(About);
