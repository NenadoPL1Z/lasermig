import { useMediaQuery } from "@mui/material";
import { Breakpoints } from "@/styles/theme/Breakpoints";

export const useNotebook = () =>
  useMediaQuery(`(max-width:${Breakpoints.NOTEBOOK}px)`);

export const useNotebookHD = () =>
  useMediaQuery(`(max-width:${Breakpoints.NOTEBOOK_HD}px)`);
export const useMobile = () =>
  useMediaQuery(`(max-width:${Breakpoints.BIG_TABLET}px)`);
