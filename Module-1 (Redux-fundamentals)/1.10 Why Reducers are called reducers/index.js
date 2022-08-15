const actions = [
  { type: "increment", payload: 1 },
  { type: "increment", payload: 1 },
  { type: "increment", payload: 1 },
  { type: "decrement", payload: 1 },
];

const initialState = {
  value: 0,
};

const createReducer = (state, { type, payload }) => {
  switch (type) {
    case "increment":
      return {
        ...state,
        value: state.value + payload,
      };
    case "decrement":
      return {
        ...state,
        value: state.value - payload,
      };

    default:
      return state;
  }
};

const finalResult = actions.reduce(createReducer, initialState);

console.log(finalResult);
