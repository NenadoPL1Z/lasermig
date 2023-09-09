import { styled } from "@mui/material";
import ColorScheme from "@/styles/theme/ColorScheme";
import { Breakpoints } from "@/styles/theme/Breakpoints";
import { FontNamespace } from "@/styles/theme/FontNamespace";

const ContainerSC = styled("section")`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: ${ColorScheme.PRIMARY};

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const TextSC = styled("div")``;

const TitleSC = styled("h3")`
  margin-bottom: 16px;

  color: ${ColorScheme.WHITE};
  font-family: ${FontNamespace.BN};

  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    margin-bottom: 8px;
    font-size: 32px;
  }
`;
const DescSC = styled("p")`
  color: ${ColorScheme.TERTIARY};
  font-family: ${FontNamespace.SF};

  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    font-size: 14px;
    margin-bottom: 32px;
  }
`;

export const styles = {
  ContainerSC,
  TextSC,
  TitleSC,
  DescSC,
};
