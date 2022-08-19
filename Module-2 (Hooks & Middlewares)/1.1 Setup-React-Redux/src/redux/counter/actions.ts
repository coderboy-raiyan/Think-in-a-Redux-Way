import { actionTypes } from "./actionTypes";

interface incrementActionType {
  type: actionTypes.INCREMENT;
  payload?: any;
}
interface decrementActionType {
  type: actionTypes.DECREMENT;
  payload?: any;
}

export const increase = (payload?: any): incrementActionType => {
  return {
    type: actionTypes.INCREMENT,
    payload,
  };
};
export const decrease = (payload?: any): decrementActionType => {
  return {
    type: actionTypes.DECREMENT,
    payload,
  };
};

export type counterActionTypes = incrementActionType | decrementActionType;
