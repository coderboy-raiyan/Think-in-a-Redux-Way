import { DDECREMENT, DINCREMENET } from "./actionTypes";

export const increment = (value: any) => {
  return {
    type: DINCREMENET,
    payload: value,
  };
};

export const decrement = (value: any) => {
  return {
    type: DDECREMENT,
    payload: value,
  };
};
