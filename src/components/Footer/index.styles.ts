import { css, styled } from "@mui/material";
import ColorScheme from "@/styles/theme/ColorScheme";
import { Breakpoints } from "@/styles/theme/Breakpoints";

const FooterSC = styled("footer")<{ isBottom: boolean }>`
  background-color: ${ColorScheme.PRIMARY};

  background-image: url("/assets/images/FooterBg.png");
  background-repeat: no-repeat;
  background-position: right top;

  border-radius: 50px;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    border-radius: 24px 24px 0 0;
    background-image: none;

    ${({ isBottom }) =>
      isBottom &&
      css`
        padding-bottom: 80px !important;
      `};
  }
`;

const FooterWrapperSC = styled("div")`
  display: flex;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    flex-direction: column;
  }
`;

export const styles = { FooterSC, FooterWrapperSC };
