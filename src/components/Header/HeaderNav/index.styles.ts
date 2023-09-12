import { css, styled } from "@mui/material";
import { Breakpoints } from "@/styles/theme/Breakpoints";
import { LinkSC } from "@/UI/LinkSC";
import ColorScheme from "@/styles/theme/ColorScheme";

const NavSC = styled("nav")`
  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    margin-bottom: 60px;
  }
`;

const UlSC = styled("ul")`
  display: flex;
  align-items: center;
  list-style-type: none;

  & > *:last-child {
    margin-right: 0;
  }

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    flex-direction: column;
    align-items: flex-start;

    & > *:last-child {
      margin-bottom: 0;
    }
  }
`;

const LiSC = styled("li")`
  margin-right: 40px;

  @media (max-width: ${Breakpoints.NOTEBOOK}px) {
    margin-right: 20px;
  }

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    width: 100%;

    margin-right: 0;
  }
`;

const CustomLinkSC = styled(LinkSC)<{ isActive: boolean }>`
  ${({ isActive }) =>
    isActive &&
    css`
      color: ${ColorScheme.BLACK};
    `};

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    display: block;
    padding: 12px 16px;

    color: ${({ isActive }) =>
      isActive ? ColorScheme.BLACK : ColorScheme.PRIMARY};

    font-size: 20px;
  }
`;

export const styles = {
  NavSC,
  UlSC,
  LiSC,
  CustomLinkSC,
};
