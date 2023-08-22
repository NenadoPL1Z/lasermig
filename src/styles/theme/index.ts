import { createTheme } from "@mui/material/styles";
import ColorScheme from "@/styles/theme/ColorScheme";
import { FontNamespace } from "@/styles/theme/FontNamespace";
import { Breakpoints } from "@/styles/theme/Breakpoints";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: ColorScheme.ACCENT,
    },
    secondary: {
      main: ColorScheme.TERTIARY,
    },
  },
  typography: {
    fontFamily: FontNamespace.SF,

    h1: {
      color: ColorScheme.PRIMARY,
      fontFamily: FontNamespace.BN,
      fontSize: "82px",
      fontWeight: 700,
      lineHeight: "82px",

      [`@media (max-width: ${Breakpoints.BIG_TABLET}px)`]: {
        fontSize: "36px",
        lineHeight: "normal",
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
      color: ColorScheme.WHITE,
      fontFamily: FontNamespace.BN,
      fontSize: 48,
      fontWeight: 700,
      lineHeight: "normal",

      [`@media (max-width: ${Breakpoints.BIG_TABLET}px)`]: {
        fontSize: 24,
      },
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
        outlined: {
          minWidth: 36,
          padding: 0,
          border: "0 !important",
          color: "#7E7E7E",
          borderRadius: "50%",
        },
      },
      defaultProps: {
        variant: "outlined",
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          ".MuiInputBase-root": {
            height: 60,

            color: ColorScheme.WHITE,

            fontSize: "24px",
            fontWeight: 400,
            fontFamily: FontNamespace.BN,

            "&::before": {
              borderBottomColor: `${ColorScheme.TERTIARY} !important`,
            },

            "&::placeholder": {
              color: ColorScheme.TERTIARY,
            },

            [`@media (max-width: ${Breakpoints.BIG_TABLET}px)`]: {
              height: 44,
              fontSize: "18px",
            },
          },
        },
      },
      defaultProps: {
        variant: "standard",
        color: "secondary",
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          color: `${ColorScheme.ERROR} !important`,

          fontFamily: FontNamespace.SF,
          fontSize: "12px",
          fontWeight: 400,
          lineHeight: "normal",

          position: "absolute",
          bottom: "-20px",

          [`@media (max-width: ${Breakpoints.BIG_TABLET}px)`]: {
            bottom: "-16px",
          },
        },
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
