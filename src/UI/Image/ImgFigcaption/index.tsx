import React from "react";
import { styled } from "@mui/material";
import { ImageModel } from "@/lib/models/ImageModel";

interface ImgFigcaption {
  image: ImageModel;
  figcaption: string;
}

const ImgFigcaption = ({ image, figcaption }: ImgFigcaption) => {
  return (
    <FigureSC>
      <ImageSC src={image.url} alt={image.alt} />
      <FigcaptionSC>{figcaption}</FigcaptionSC>
    </FigureSC>
  );
};

const FigureSC = styled("figure")``;
const ImageSC = styled("img")``;
const FigcaptionSC = styled("figcaption")``;

export default React.memo(ImgFigcaption);
