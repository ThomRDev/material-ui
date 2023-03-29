import { PaletteMode, createTheme } from '@mui/material';
import { DarkOptions } from './DarkOptions';
import { LigthOptions } from './LightOptions';
import { useState,useMemo,ReactNode,createContext } from 'react';
import { CssBaseline, ThemeProvider } from "@mui/material";
const getDesignTokens = (mode: PaletteMode) => ({
  // ...(mode === 'light' ?  LigthOptions:DarkOptions),
  palette: {
    mode,
  }
})
export const ColorModeContext = createContext({ toggleColorMode: () => {} });

export const AppTheme = ({ children }:{ children:ReactNode }) => {
  const [mode, setMode] = useState<PaletteMode>('dark');
  const colorMode = useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) =>
          prevMode === 'light' ? 'dark' : 'light',
        );
      },
    }),
    [],
  );
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
          <CssBaseline />
          { children }
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}
