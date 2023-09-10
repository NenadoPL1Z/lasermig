import { styled } from "@mui/material";
import { ZIndex } from "@/styles/theme/ZIndex";
import ColorScheme from "@/styles/theme/ColorScheme";
import { Breakpoints } from "@/styles/theme/Breakpoints";

const HeaderSC = styled("header")`
  height: 99px;

  position: sticky;
  top: 20px;
  z-index: ${ZIndex.HEADER};

  border-radius: 50px;
  box-shadow: 0 9px 34px 0 rgba(223, 223, 223, 0.42);
  background-color: ${ColorScheme.WHITE};

  transition: 0.2s all linear;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    height: auto;

    top: -1px;
    border-radius: 0 0 24px 24px;
  }
`;

export const styles = {
  HeaderSC,
};
