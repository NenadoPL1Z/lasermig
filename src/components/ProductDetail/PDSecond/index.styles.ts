import { styled } from "@mui/material";
import { Breakpoints } from "@/styles/theme/Breakpoints";
import ColorScheme from "@/styles/theme/ColorScheme";
import { FontNamespace } from "@/styles/theme/FontNamespace";

const ContainerSC = styled("div")``;

const TopSC = styled("div")`
  display: flex;
  margin-bottom: 64px;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    display: none;
  }
`;

const BottomSC = styled("div")`
  display: flex;
  flex-direction: row;

  & > *:first-child {
    margin-right: 53px;
  }

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    flex-direction: column;

    & > *:first-child {
      margin-right: 0;
    }
  }
`;

const AdditionalSC = styled("div")`
  display: flex;
  flex-direction: column;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    margin-bottom: 16px;
  }
`;

const AdditionalTitleSC = styled("p")`
  font-size: 18px;
  margin-bottom: 10px;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    font-size: 14px;
  }
`;

const AdditionalDescSC = styled("p")`
  color: ${ColorScheme.PRIMARY};
  white-space: pre-wrap;

  font-size: 24px;
  font-family: ${FontNamespace.BN};

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    font-size: 18px;
  }
`;

const DesSC = styled("p")`
  font-size: 18px;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    font-size: 14px;
  }
`;

export const styles = {
  ContainerSC,
  TopSC,
  BottomSC,
  AdditionalSC,
  AdditionalTitleSC,
  AdditionalDescSC,
  DesSC,
};
