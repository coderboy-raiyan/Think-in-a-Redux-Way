import { counterActionTypes } from "./actions";
import { actionTypes } from "./actionTypes";

export interface InitialCounterState {
  value: number;
}

const initialState: InitialCounterState = {
  value: 0,
};

const counterReducer = (
  state: InitialCounterState = initialState,
  { type }: counterActionTypes
) => {
  switch (type) {
    case actionTypes.INCREMENT:
      return {
        ...state,
        value: state.value + 1,
      };
    case actionTypes.DECREMENT:
      return {
        ...state,
        value: state.value - 1,
      };

    default:
      return state;
  }
};

export default counterReducer;
