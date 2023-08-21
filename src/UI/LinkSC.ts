import { styled } from "@mui/material";
import Link from "next/link";
import ColorScheme from "@/styles/theme/ColorScheme";

export const LinkSC = styled(Link)`
  font-family: "BN", sans-serif;
  font-size: 24px;
  font-weight: 400;
  color: ${ColorScheme.SECONDARY};
`;
