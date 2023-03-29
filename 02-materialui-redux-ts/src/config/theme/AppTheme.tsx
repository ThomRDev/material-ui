import {
	PaletteMode,
	createTheme,
	CssBaseline,
	ThemeProvider,
} from '@mui/material';
import { ThemeAppContext } from '../../contexts';
import { useReducer, useCallback, useMemo, ReactNode, FC } from 'react';
import { themeReducer } from '../../reducers';
import { ThemeActionsTypes } from '../../actions';

import { DarkOptions } from './DarkOptions';
import { LightOptions } from './LightOptions';

const getDesignTokens = (mode: PaletteMode) => ({
	...(mode === 'light' ? LightOptions : DarkOptions),
	// palette: {
	// 	mode,
	// },
});

// con material ui  puede customizar de forma completa como de forma parcial

interface AppThemeProps {
	children: ReactNode;
}

export const AppTheme: FC<AppThemeProps> = ({ children }) => {
	const [{ theme }, dispatch] = useReducer(themeReducer, {
		theme: 'dark',
	});
	const themeOptions = useMemo(
		() => createTheme(getDesignTokens(theme)),
		[theme]
	);
	const toggleChangeTheme = useCallback(() => {
		dispatch({
			type: ThemeActionsTypes.CHANGE_THEME,
			payload: theme === 'dark' ? 'light' : 'dark',
		});
	}, [theme]);

	const value = useMemo(() => {
		return {
			theme,
			toggleChangeTheme,
		};
	}, [theme]);

	return (
		<ThemeAppContext.Provider value={value}>
			<ThemeProvider theme={themeOptions}>
				<CssBaseline />
				{children}
			</ThemeProvider>
		</ThemeAppContext.Provider>
	);
};
