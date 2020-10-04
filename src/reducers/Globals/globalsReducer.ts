import { combineReducers } from "redux";
import { ThemeReducer, ThemeState } from "./Theme/themeReducer";

export type GlobalState = {
  theme: ThemeState;
};

export const GlobalsReducer = combineReducers({
  theme: ThemeReducer,
});
