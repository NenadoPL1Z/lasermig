import { styled } from "@mui/material";
import { H2SC } from "@/UI/H2SC";
import { Breakpoints } from "@/styles/theme/Breakpoints";
import ColorScheme from "@/styles/theme/ColorScheme";

const ContainerSC = styled("li")`
  margin-bottom: 48px;
  padding-bottom: 48px;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${ColorScheme.TERTIARY};

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    margin-bottom: 16px;
    padding-bottom: 16px;
  }
`;

const TopSC = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 24px;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    margin-bottom: 16px;
    font-size: 16px;
  }
`;

const TitleSC = styled(H2SC)`
  font-size: 32px;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    font-size: 24px;
  }
`;

const NumSC = styled(TitleSC)`
  color: ${ColorScheme.TERTIARY};
`;

const DescSC = styled("p")`
  max-width: 362px;

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
  NumSC,
  DescSC,
};
