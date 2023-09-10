import { styled } from "@mui/material";
import { H1SC } from "@/UI/H1SC";
import { Breakpoints } from "@/styles/theme/Breakpoints";

const TitleSC = styled(H1SC)`
  margin-bottom: 10px;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    margin-bottom: 16px;
  }
`;

const ContainerSC = styled("section")`
  margin-bottom: 100px;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    margin-bottom: 48px;
  }
`;

export const styles = {
  TitleSC,
  ContainerSC,
};
