import { createTheme } from "@mui/material/styles";
import ColorScheme from "@/styles/theme/ColorScheme";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: ColorScheme.PRIMARY,
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: "contained",
      },
    },
  },
});

declare module "@mui/material/styles" {
  interface Theme {}
  // allow configuration using `createTheme`
  interface ThemeOptions {}
}

export default theme;
