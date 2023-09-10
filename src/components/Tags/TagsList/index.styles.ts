import { styled } from "@mui/material";
import { Breakpoints } from "@/styles/theme/Breakpoints";
import { mixinHideScroll } from "@/styles/theme/Mixins";

const ContainerSC = styled("ul")`
  margin-bottom: 50px;

  display: flex;
  align-items: center;

  overflow-x: scroll;
  list-style-type: none;

  ${mixinHideScroll};

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    margin-bottom: 16px;
  }
`;

export const styles = {
  ContainerSC,
};
