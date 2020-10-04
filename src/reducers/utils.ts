import { Dispatch, AnyAction } from "redux";

export const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
  return {
    dispatch: dispatch,
  };
};
