import { styled } from "@mui/material";
import { Breakpoints } from "@/styles/theme/Breakpoints";
import { LinkSC } from "@/UI/LinkSC";
import ColorScheme from "@/styles/theme/ColorScheme";

const ContainerSC = styled("nav")`
  width: 100%;
  max-width: 250px;
  margin-right: 20px;

  display: flex;
  align-items: flex-start;
  flex-direction: column;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    max-width: none;
    margin-right: 0;
    margin-bottom: 36px;
  }
`;

const UlSC = styled("ul")`
  list-style-type: none;
  & > *:last-child {
    margin-bottom: 0;
  }
`;

const LiSC = styled("li")`
  font-size: 24px;
  margin-bottom: 24px;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    font-size: 20px;
    margin-bottom: 16px;
  }
`;

const CustomLinkSC = styled(LinkSC)`
  color: ${ColorScheme.WHITE};
`;

export const styles = { ContainerSC, UlSC, LiSC, CustomLinkSC };
