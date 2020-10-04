import { ThemeString } from "../themeReducer";

const SET_THEME = "SET_THEME";

interface SetTheme {
  type: typeof SET_THEME;
  payload: {
    theme: ThemeString;
  };
}

export type ThemeAction = SetTheme;
