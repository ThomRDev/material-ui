import { useContext } from 'react';
import { ThemeAppContext } from '../contexts/ThemeAppContext';

export const useTheme = () => {
  return useContext(ThemeAppContext)
}
