import { PaletteMode } from '@mui/material';
import { ThemeActions, ThemeActionsTypes } from '../actions/themeActions';

export interface ThemeState {
  theme: PaletteMode
}

export const themeReducer = (state:ThemeState,action:ThemeActions):ThemeState => {
  switch(action.type){
    case ThemeActionsTypes.CHANGE_THEME:
      return {
        ...state,
        theme: action.payload
      }
    default:
      return state
  }
}