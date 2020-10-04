import { StoreState } from "../../createReducers";
import { ThemeAction } from "./actions/actionTypes";

export type ThemeString = "light" | "dark";

export type ThemeState = {
  theme: ThemeString;
};

const initialState: ThemeState = {
  theme: "light",
};

export const mapThemeStateToProps = ({ globals: { theme } }: StoreState) => ({
  theme: theme.theme,
});

export const ThemeReducer = (
  state = initialState,
  action: ThemeAction
): ThemeState => {
  switch (action.type) {
    case "SET_THEME":
      return {
        theme: action.payload.theme,
      };
    default:
      return state;
  }
};
