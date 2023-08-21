import { useMediaQuery } from "@mui/material";
import { Breakpoints } from "@/styles/theme/Breakpoints";

export const useMobile = () =>
  useMediaQuery(`@media (max-width: ${Breakpoints.BIG_TABLET}px`);
