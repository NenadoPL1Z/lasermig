import { styled } from "@mui/material";
import ColorScheme from "@/styles/theme/ColorScheme";
import { Breakpoints } from "@/styles/theme/Breakpoints";

const PolicySC = styled("div")`
  color: ${ColorScheme.TERTIARY};
  font-size: 18px;
  margin-bottom: 10px;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    font-size: 12px;
  }
`;

const AllRightSC = styled("div")`
  color: ${ColorScheme.TERTIARY};
  font-size: 18px;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    font-size: 12px;
  }
`;

export const styles = {
  PolicySC,
  AllRightSC,
};
