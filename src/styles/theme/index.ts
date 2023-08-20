import { createTheme } from "@mui/material/styles";
import ColorScheme from "@/styles/theme/ColorScheme";
import { FontNamespace } from "@/styles/theme/FontNamespace";
import { Breakpoints } from "@/styles/theme/Breakpoints";

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
      styleOverrides: {
        contained: {
          maxHeight: "60px",
          padding: "20px 30px 16px",

          color: ColorScheme.MAIN,

          fontFamily: FontNamespace.BN,
          fontSize: "24px",
          fontWeight: "400",

          borderRadius: 69,
          boxShadow: "none",

          "&:hover": {
            boxShadow: "none",
          },

          [`@media (max-width: ${Breakpoints.BIG_TABLET}px)`]: {
            maxHeight: "40px",
            padding: "13px 20px 10px",

            fontSize: "18px",
          },
        },
        outlined: {
          minWidth: 36,
          padding: 0,
          border: "0 !important",
          color: "#7E7E7E",
        },
      },
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
