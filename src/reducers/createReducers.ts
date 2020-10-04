import { combineReducers } from "redux";
import { GlobalsReducer, GlobalState } from "./Globals/globalsReducer";

export default combineReducers({
  globals: GlobalsReducer,
});

export type StoreState = {
  globals: GlobalState;
};
