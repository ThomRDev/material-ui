import { createContext } from 'react';
import { PaletteMode } from '@mui/material';

interface ThemeAppContextProps {
	theme: PaletteMode;
	toggleChangeTheme: () => void;
}

export const ThemeAppContext = createContext<ThemeAppContextProps>(
	{} as ThemeAppContextProps
);
