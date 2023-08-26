import { styled } from "@mui/material";
import { Breakpoints } from "@/styles/theme/Breakpoints";
import { TitleSC } from "@/UI/TitleSC";

export const PageTitleSC = styled(TitleSC)`
  margin-top: 50px;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    margin-top: 36px;
  }
`;
