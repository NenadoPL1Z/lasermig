import { createTheme } from "@mui/material/styles";
import ColorScheme from "@/styles/theme/ColorScheme";
import { FontNamespace } from "@/styles/theme/FontNamespace";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: ColorScheme.PRIMARY,
    },
  },
  typography: {
    h1: {
      fontFamily: FontNamespace.BN,
      fontWeight: 700,
      fontSize: "82px",
      lineHeight: "82px",

      "@media (max-width:1000px)": {
        fontSize: "20px",
      },
    },
    h2: {
      fontFamily: FontNamespace.BN,
      fontWeight: 700,
    },
    h3: {
      fontFamily: FontNamespace.BN,
      fontWeight: 700,
    },
    h4: {
      fontFamily: FontNamespace.BN,
      fontWeight: 700,
    },
    h5: {
      fontFamily: FontNamespace.BN,
      fontWeight: 700,
    },
    h6: {
      fontFamily: FontNamespace.BN,
      fontWeight: 700,
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
