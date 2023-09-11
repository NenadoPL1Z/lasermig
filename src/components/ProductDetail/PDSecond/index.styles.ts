import { styled } from "@mui/material";
import { DefaultButton } from "@/UI/Buttons/DefaultButton";
import { Breakpoints } from "@/styles/theme/Breakpoints";
import { H3SC } from "@/UI/H3SC";
import ColorScheme from "@/styles/theme/ColorScheme";

const ContainerSC = styled("div")``;

const TopSC = styled("div")`
  display: flex;
  margin-bottom: 64px;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    margin-bottom: 32px;
  }
`;

const ButtonSC = styled(DefaultButton)`
  @media (max-width: ${Breakpoints.NOTEBOOK}px) {
    flex-grow: 1;
  }
`;

const PriceSC = styled("div")`
  margin-left: 24px;
  display: flex;
  flex-direction: column;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    margin-left: 16px;
  }
`;

const PriceLabelSC = styled("p")`
  font-size: 18px;
  margin-bottom: 10px;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    font-size: 12px;
    margin-bottom: 4px;
  }
`;

const PriceSumSC = styled(H3SC)`
  font-size: 24px;
  font-weight: 400;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    font-size: 18px;
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
  ButtonSC,
  PriceSC,
  PriceLabelSC,
  PriceSumSC,
  BottomSC,
  AdditionalSC,
  AdditionalTitleSC,
  AdditionalDescSC,
  DesSC,
};
