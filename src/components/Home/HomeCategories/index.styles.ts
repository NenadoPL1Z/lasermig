import { styled } from "@mui/material";
import { Breakpoints } from "@/styles/theme/Breakpoints";

const FirstSC = styled("section")`
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

const SecondSC = styled("section")`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  margin-top: 20px;
  gap: 20px;

  & > * {
    flex: 1;
    min-width: calc(50% - 20px);
  }

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    display: none;
  }
`;

export const styles = {
  FirstSC,
  SecondSC,
};
