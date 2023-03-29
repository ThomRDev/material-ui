import { ThemeOptions } from '@mui/material';
/* eslint-disable no-unused-vars */
export enum themePalette {
  BG = "#12181b",
  LIME = "#C8FA5F",
  FONT_GLOBAL = "'JetBrains Mono', monospace",
  ERROR_MAIN = "#f44336",
  BG_ERROR_MAIN = "rgba(244,67,54,0.1)",
  SUCCESS_MAIN = "#66bb6a",
  BG_SUCCESS_MAIN = "rgba(102,187,106,0.1)",
}
export const DarkOptions:ThemeOptions  = {
  palette: {
    mode: "dark",
    background: {
      default: themePalette.BG,
      // normalmente el paper sirve para que tenga el mismo color del background pero que resalte un poco mas
      // por ejemplo un background y un componente que tenga un background un poco mas resaltado
      // ´para que no se pierda con el fondo
      paper: themePalette.BG,
    },
    primary: {
      main: themePalette.LIME,
    },
  },
  typography: {
    fontFamily: themePalette.FONT_GLOBAL,
  },
  // para customizar nuestros componentes
  components: {
    // todos los componentes empezaran por Mui...
    MuiButton: {
      defaultProps: {
        style: {
          // no quiero que haga un upper
          textTransform: "none",
          boxShadow: "none",
          borderRadius: "0.5em",
        },
      },
    },
    MuiAlert: {
      defaultProps: {
        // para css puro y duro
        style: {
          borderRadius: "0.8em",
          fontSize: "1em",
        },
      },
      // sobreescribir estilos que crea material
      styleOverrides: {
        // estilos ya existentes que agrega material
        standardError: {
          border: `1px solid ${themePalette.ERROR_MAIN}`,
          background: themePalette.BG_ERROR_MAIN,
        },
        standardSuccess: {
          border: `1px solid ${themePalette.SUCCESS_MAIN}`,
          background: themePalette.BG_SUCCESS_MAIN,
        },
      },
    },
  },
}