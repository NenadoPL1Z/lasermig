import { styled } from "@mui/material";
import { Breakpoints } from "@/styles/theme/Breakpoints";

const ContainerSC = styled("section")`
  margin-bottom: 100px;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    margin-bottom: 48px;
  }
`;

const ContentSC = styled("section")`
  margin-top: 50px;
  margin-bottom: 100px;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    margin-top: 10px;
    margin-bottom: 48px;
  }
`;

export const styles = {
  ContainerSC,
  ContentSC,
};
