import React from "react";
import TextsList from "@/UI/TextsList/TextsList";
import ImgPage from "@/UI/Image/ImgPage";
import { aboutPageData } from "@/lib/mock/aboutPageData";
import { H2SC } from "@/UI/H2SC";
import { ParagraphSC } from "@/UI/ParagraphSC";
import TitleLayout from "@/layout/TitleLayout";
import Questions from "@/components/Questions";
import { styles } from "@/pages/about/index.styles";

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
        <figure className="content-margin48">
          <BottomImageSC
            className="content-br"
            src="/assets/images/office.jpg"
          />
          <FigcaptionSC>Офис</FigcaptionSC>
        </figure>
      </ContainerInfoSC>
      <Questions />
    </TitleLayout>
  );
};

const {
  ContainerImageSC,
  TitleSC,
  ContainerInfoSC,
  BottomImageSC,
  FigcaptionSC,
} = styles;

export default React.memo(About);
