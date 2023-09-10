import React from "react";
import TextsList from "@/UI/TextsList/TextsList";
import { aboutPageData } from "@/lib/mock/aboutPageData";
import { H2SC } from "@/UI/H2SC";
import { ParagraphSC } from "@/UI/ParagraphSC";
import TitleLayout from "@/layout/TitleLayout";
import Questions from "@/components/Questions";
import { styles } from "@/styles/pages/about.styles";
import ImgPage from "@/components/ImgPage";

const About = () => {
  return (
    <TitleLayout title="О НАС">
      <div className="padding">
        <ContainerImageSC>
          <ImgPage url={aboutPageData.header.image}>
            <TitleSC>{aboutPageData.header.title}</TitleSC>
          </ImgPage>
        </ContainerImageSC>
        <ContainerInfoSC className="container-two">
          <H2SC className="content-title">{aboutPageData.list.title}</H2SC>
          <TextsList
            item={aboutPageData.list.items}
            variant={aboutPageData.list.variant as "number"}
          />
          {aboutPageData.desc.map((desc) => (
            <ParagraphSC key={desc} className="content-margin48">
              {desc};
            </ParagraphSC>
          ))}
          <figure className="content-margin48">
            <BottomImageSC
              className="content-br"
              src={aboutPageData.bottom.image}
            />
            <FigcaptionSC>{aboutPageData.bottom.figcaption}</FigcaptionSC>
          </figure>
        </ContainerInfoSC>
        <Questions />
      </div>
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
