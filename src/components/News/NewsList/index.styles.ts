import { styled } from "@mui/material";
import { Breakpoints } from "@/styles/theme/Breakpoints";

const ContainerSC = styled("ul")`
  display: grid;
  gap: 20px;

  grid-template-areas: "grid-big grid-small grid-small grid-small";

  & > .grid-big {
    min-height: 600px;

    grid-area: grid-big;
    grid-column: span 2;
    grid-row: span 1;

    img {
      height: 440px;
    }
  }

  & > .grid-small {
    grid-area: grid-small;
  }

  & > .gird-small {
    & > div {
      height: 100%;
    }
  }

  list-style-type: none;
`;

const BottomSC = styled("div")`
  margin-top: 50px;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    margin-top: 16px;
  }
`;

export const styles = {
  ContainerSC,
  BottomSC,
};
