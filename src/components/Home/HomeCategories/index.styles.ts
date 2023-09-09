import { styled } from "@mui/material";
import { Breakpoints } from "@/styles/theme/Breakpoints";

const ContainerSC = styled("ul")`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  list-style-type: none;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    gap: 16px;
    grid-template-columns: repeat(auto-fill, minmax(288px, 1fr));
  }
`;

export const styles = {
  ContainerSC,
};
