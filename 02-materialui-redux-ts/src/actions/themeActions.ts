import { PaletteMode } from "@mui/material";
/* eslint-disable no-unused-vars */
export enum ThemeActionsTypes {
  CHANGE_THEME = "[theme] change theme"
}

export type ThemeActions =
| { type:ThemeActionsTypes.CHANGE_THEME, payload: PaletteMode }