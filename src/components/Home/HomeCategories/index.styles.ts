import { styled } from "@mui/material";
import { Breakpoints } from "@/styles/theme/Breakpoints";

const ContainerSC = styled("ul")`
  display: grid;
  grid-template-columns: 3fr 1.5fr;
  gap: 20px;

  list-style-type: none;

  & > .grid-2 {
    grid-row: span 2;
  }

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    gap: 16px;
    grid-template-columns: repeat(auto-fill, minmax(288px, 1fr));

    & > .grid-2 {
      grid-row: auto;
    }
  }
`;

export const styles = {
  ContainerSC,
};
