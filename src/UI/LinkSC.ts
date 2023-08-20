import styled from "styled-components";
import Link from "next/link";
import ColorScheme from "@/styles/theme/ColorScheme";
import { Breakpoints } from "@/styles/theme/Breakpoints";

export const LinkSC = styled(Link)`
  font-family: "BN", sans-serif;
  font-size: 24px;
  font-weight: 400;
  color: ${ColorScheme.LINK};

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    color: ${ColorScheme.MAIN};
  }
`;
