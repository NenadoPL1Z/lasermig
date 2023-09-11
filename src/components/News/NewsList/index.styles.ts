import { styled } from "@mui/material";
import { Breakpoints } from "@/styles/theme/Breakpoints";

const ContainerSC = styled("ul")`
  display: grid;
  grid-template-areas: "grid-big grid-small grid-small grid-small";
  gap: 20px;

  list-style-type: none;

  .grid-big {
    min-height: 600px;
    max-width: 795px;

    grid-area: grid-big;
    grid-column: span 2;
    grid-row: span 1;

    img {
      height: 440px;
    }
  }

  .grid-small {
    grid-area: grid-small;
  }

  .gird-small {
    div {
      height: 100%;
    }
  }

  .gird-small-after {
    div {
      height: auto;
    }
    img {
      height: 222px;
      min-height: 222px;
    }
  }

  @media (max-width: ${Breakpoints.NOTEBOOK_HD}px) {
    grid-template-areas: "grid-big grid-small grid-small";
  }

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    grid-template-areas: none;
    grid-template-columns: 1fr 1fr;
    gap: 16px;

    .grid-big {
      min-height: auto;

      grid-area: initial;
      grid-column: initial;
      grid-row: initial;

      img {
        height: 222px;
      }
    }

    .grid-small {
      grid-area: initial;
    }

    .gird-small-after {
      div {
        height: 100%;
      }
      img {
        height: 222px;
        min-height: 222px;
      }
    }

    & > li > div {
      height: 100%;
    }

    & > li img {
      min-height: 222px;
    }
  }

  @media (max-width: ${Breakpoints.TABLET}px) {
    .grid-big {
      img {
        height: 188px;
      }
    }

    .gird-small-after {
      img {
        height: 188px;
        min-height: 188px;
      }
    }

    & > li img {
      height: 188px;
      min-height: 188px;
    }
  }

  @media (max-width: ${Breakpoints.MOBILE}px) {
    grid-template-columns: 1fr;
  }
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
