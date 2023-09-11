import { styled } from "@mui/material";
import ColorScheme from "@/styles/theme/ColorScheme";
import { Breakpoints } from "@/styles/theme/Breakpoints";

const ContainerSC = styled("div")`
  background-color: ${ColorScheme.WHITE};

  margin-bottom: 50px;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    margin-bottom: 48px;
  }
`;

const LeftSC = styled("div")`
  max-width: 538px;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    max-width: none;
  }
`;
const RightSC = styled("div")``;

export const styles = {
  ContainerSC,
  LeftSC,
  RightSC,
};
