import { styled } from "@mui/material";
import { Breakpoints } from "@/styles/theme/Breakpoints";
import { H1SC } from "@/UI/H1SC";

const BackSC = styled("section")`
  margin-bottom: 32px;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    margin-bottom: 8px;
  }
`;

const TitleSC = styled(H1SC)`
  margin-bottom: 10px;
  font-size: 48px;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    margin-bottom: 16px;
    font-size: 32px;
  }
`;

const ContainerSC = styled("section")`
  margin-bottom: 100px;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    margin-bottom: 48px;
  }
`;
export const styles = { BackSC, TitleSC, ContainerSC };
