import { DDECREMENT, DINCREMENET } from "./actionTypes";

const initialState = {
  value: 0,
};

const dynamicCounterReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case DINCREMENET:
      return {
        ...state,
        value: state.value + action.payload,
      };

    case DDECREMENT:
      return {
        ...state,
        value: state.value - action.payload,
      };

    default:
      return state;
  }
};

export default dynamicCounterReducer;
