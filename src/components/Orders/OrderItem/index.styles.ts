import { styled } from "@mui/material";
import ColorScheme from "@/styles/theme/ColorScheme";
import { Breakpoints } from "@/styles/theme/Breakpoints";
import { H2SC } from "@/UI/H2SC";

const ContainerSC = styled("div")`
  min-height: 188px;
  background-color: ${ColorScheme.WHITE};
`;

const TopSC = styled("div")`
  display: flex;
  justify-content: space-between;

  margin-bottom: 24px;
`;

const TitleSC = styled(H2SC)`
  font-size: 32px;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    font-size: 24px;
  }
`;

const NumberSC = styled(TitleSC)`
  color: ${ColorScheme.TERTIARY};
`;

const DescSC = styled("p")`
  font-size: 20px;
  font-weight: 400;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    font-size: 14px;
  }
`;

export const styles = {
  ContainerSC,
  TopSC,
  TitleSC,
  DescSC,
  NumberSC,
};
