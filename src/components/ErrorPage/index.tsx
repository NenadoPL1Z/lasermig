import React from "react";
import { styled } from "@mui/material";
import { Typography } from "@mui/material";
import { ChildrenProps } from "@/types/types";
import { Breakpoints } from "@/styles/theme/Breakpoints";

type ErrorImage = "404" | "500";

interface ErrorPageProps extends Partial<ChildrenProps> {
  title: string;
  errorImage: ErrorImage;
}

const ErrorPage = ({ title, errorImage, children }: ErrorPageProps) => {
  return (
    <ContainerSC errorImage={errorImage} className="content content-bg">
      <TextContentSC>
        <TitlesSC variant="h1">{title}</TitlesSC>
        {children}
      </TextContentSC>
    </ContainerSC>
  );
};

const ContainerSC = styled("section")<Pick<ErrorPageProps, "errorImage">>`
  flex-grow: 1;
  margin: 50px 0;
  min-height: 418px;

  background-image: url(/assets/images/${({ errorImage }) =>
    errorImage + ".jpg"});
  background-repeat: no-repeat;
  background-position: right 65px bottom;
  background-size: 45%;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    margin: 16px 0 48px;

    background-position: right 6px bottom;
    background-size: 276px 170px;
  }
`;

const TextContentSC = styled("div")`
  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    max-width: none;
  }
`;

const TitlesSC = styled(Typography)`
  max-width: 427px;
  margin-bottom: 16px;
`;

export default React.memo(ErrorPage);
