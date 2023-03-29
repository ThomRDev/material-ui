import { ThemeOptions } from '@mui/material';
/* eslint-disable no-unused-vars */
export enum lightThemePalette {
  BG = "#ffffff",
  PRIMARY = "#3f51b5",
  FONT_GLOBAL = "'JetBrains Mono', monospace",
  // Alert styles
  ERROR_MAIN = "#f44336",
  BG_ERROR_MAIN = "rgba(244,67,54,0.1)",
  SUCCESS_MAIN = "#66bb6a",
  BG_SUCCESS_MAIN = "rgba(102,187,106,0.1)",
}


export const LightOptions:ThemeOptions  = {
  palette: {
    mode: "light",
    background: {
      default: lightThemePalette.BG,
      paper: lightThemePalette.BG,
    },
    primary: {
      main: lightThemePalette.PRIMARY,
    },
  },
  typography: {
    fontFamily: lightThemePalette.FONT_GLOBAL,
  },
  components: {
    MuiButton: {
      defaultProps: {
        style: {
          textTransform: "none",
          boxShadow: "none",
          borderRadius: "0.5em",
        },
      },
    },
    MuiAlert: {
      defaultProps: {
        style: {
          borderRadius: "0.8em",
          fontSize: "1em",
        },
      },
      styleOverrides: {
        standardError: {
          border: `1px solid ${lightThemePalette.ERROR_MAIN}`,
          background: lightThemePalette.BG_ERROR_MAIN,
        },
        standardSuccess: {
          border: `1px solid ${lightThemePalette.SUCCESS_MAIN}`,
          background: lightThemePalette.BG_SUCCESS_MAIN,
        },
      },
    },
  },
}