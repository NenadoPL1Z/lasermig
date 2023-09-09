import { styled } from "@mui/material";
import { Breakpoints } from "@/styles/theme/Breakpoints";
import { H1SC } from "@/UI/H1SC";

const TitleSC = styled(H1SC)`
  margin-bottom: 50px;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    margin-bottom: 16px;
  }
`;

const CategoriesSC = styled("section")`
  margin-bottom: 50px;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    margin-bottom: 48px;
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
  CategoriesSC,
  ContainerSC,
};
