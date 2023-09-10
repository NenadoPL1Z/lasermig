import { useMediaQuery } from "@mui/material";
import { Breakpoints } from "@/styles/theme/Breakpoints";

export const useNotebookHD = () =>
  useMediaQuery(`@media (max-width: ${Breakpoints.NOTEBOOK_HD}px`);
export const useMobile = () =>
  useMediaQuery(`@media (max-width: ${Breakpoints.BIG_TABLET}px`);
