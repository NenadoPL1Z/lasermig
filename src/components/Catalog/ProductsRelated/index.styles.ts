import { styled } from "@mui/material";
import { Breakpoints } from "@/styles/theme/Breakpoints";
import { H1SC } from "@/UI/H1SC";

const TitleSC = styled(H1SC)`
  margin-bottom: 50px;
  font-size: 48px;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    font-size: 32px;
    margin-bottom: 16px;
  }
`;

const ListSC = styled("ul")`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  list-style-type: none;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

export const styles = {
  TitleSC,
  ListSC,
};
