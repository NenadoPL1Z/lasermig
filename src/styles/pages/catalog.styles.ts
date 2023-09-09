import { styled } from "@mui/material";
import { Breakpoints } from "@/styles/theme/Breakpoints";

const ListSC = styled("section")`
  margin-top: 50px;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    margin-top: 16px;
  }
`;
export const styles = {
  ListSC,
};
