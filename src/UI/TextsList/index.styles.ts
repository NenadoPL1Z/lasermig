import { styled } from "@mui/material";
import ColorScheme from "@/styles/theme/ColorScheme";
import { FontNamespace } from "@/styles/theme/FontNamespace";
import { Breakpoints } from "@/styles/theme/Breakpoints";

const ListSC = styled("ul")`
  padding-left: 55px;
  list-style-type: disc;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    padding-left: 16px;
  }
`;

const NumberListSC = styled("ol")`
  padding-left: 55px;
  list-style-type: number;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    padding-left: 16px;
  }
`;

const ItemSC = styled("li")`
  color: ${ColorScheme.PRIMARY};

  font-family: ${FontNamespace.SF};

  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  margin-bottom: 5px;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    font-size: 14px;
  }
`;

export const styles = {
  ListSC,
  NumberListSC,
  ItemSC,
};
