import { styled } from "@mui/material";
import { H1SC } from "@/UI/H1SC";
import { Breakpoints } from "@/styles/theme/Breakpoints";
import { FontNamespace } from "@/styles/theme/FontNamespace";
import Link from "next/link";

const ContainerSC = styled("div")`
  margin-bottom: 24px;
  max-width: 469px;

  @media (max-width: ${Breakpoints.NOTEBOOK}px) {
    max-width: none;
  }

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    margin-bottom: 32px;
  }
`;

const BackSC = styled("div")`
  margin-bottom: 64px;

  @media (max-width: ${Breakpoints.NOTEBOOK}px) {
    position: absolute;
    left: 30px;
    top: 30px;
  }

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    margin-bottom: 32px;
    position: static;
    left: auto;
    top: auto;
  }
`;

const TagsSC = styled("ul")`
  margin-bottom: 12px;

  display: flex;
  align-items: center;
  flex-wrap: wrap;

  list-style-type: none;

  & > *:last-child {
    margin-right: 0;
  }
`;

const TagSC = styled("li")``;

const TagLinkSC = styled(Link)`
  display: block;
  margin-right: 20px;
  margin-bottom: 8px;

  font-family: ${FontNamespace.BN};
  font-size: 20px;
  font-weight: 400;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    font-size: 18px;
  }
`;

const TitleSC = styled(H1SC)`
  font-size: 48px;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    font-size: 24px;
  }
`;

export const styles = {
  ContainerSC,
  BackSC,
  TagsSC,
  TagSC,
  TagLinkSC,
  TitleSC,
};
