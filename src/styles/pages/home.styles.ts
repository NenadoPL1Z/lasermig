import { styled } from "@mui/material";
import { Breakpoints } from "@/styles/theme/Breakpoints";

const BackgroundSC = styled("div")``;

const ContainerSC = styled("section")`
  margin-bottom: 100px;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    margin-bottom: 48px;
  }
`;

export const styles = {
  BackgroundSC,
  ContainerSC,
};
