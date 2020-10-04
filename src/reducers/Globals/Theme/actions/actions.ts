import { ThemeString } from "../themeReducer";
import { ThemeAction } from "./actionTypes";

export const setTheme = (theme: ThemeString): ThemeAction => ({
  type: "SET_THEME",
  payload: {
    theme,
  },
});
