import { styled } from "@mui/material";
import ColorScheme from "@/styles/theme/ColorScheme";
import { H2SC } from "@/UI/H2SC";
import { Breakpoints } from "@/styles/theme/Breakpoints";

const ContainerSC = styled("li")`
  list-style-type: none;
  background-color: ${ColorScheme.WHITE};
`;

const ImgSC = styled("img")`
  display: block;

  width: 100%;
  max-width: 480px;
  max-height: 323px;

  margin-bottom: 51px;

  object-fit: contain;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    margin-bottom: 20px;
  }

  @media (max-width: ${Breakpoints.TABLET}px) {
    max-height: 172px;
  }
`;

const TextContainerSC = styled("div")``;
const TitleSC = styled(H2SC)`
  font-size: 36px;
  margin-bottom: 24px;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    font-size: 24px;
    margin-bottom: 8px;
  }
`;

export const styles = { ContainerSC, ImgSC, TextContainerSC, TitleSC };
