import { styled } from "@mui/material";
import ColorScheme from "@/styles/theme/ColorScheme";
import { Breakpoints } from "@/styles/theme/Breakpoints";

const ContainerSC = styled("div")`
  margin-bottom: 50px;

  display: flex;
  justify-content: space-between;

  background-color: ${ColorScheme.WHITE};

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    margin-bottom: 48px;
    flex-direction: column;
    justify-content: flex-start;
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
