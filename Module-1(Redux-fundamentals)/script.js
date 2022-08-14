const increaseEl = document.getElementById("increase");
const decreaseEl = document.getElementById("decrease");
const increaseByTenEl = document.getElementById("increase10");
const decreaseByTwoEl = document.getElementById("decrease2");
const counter = document.getElementById("counter");

// Action Identifiers
const INCREASE = "increase";
const DECREASE = "decrease";
const INCREASEBYTEN = "increaseByTen";
const DECREASEBYTWO = "decreaseByTwo";

const initialState = {
  value: 0,
};

// Reducer
const createReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case INCREASE:
      return {
        ...state,
        value: state.value + 1,
      };
    case DECREASE:
      return {
        ...state,
        value: state.value - 1,
      };
    case INCREASEBYTEN:
      return {
        ...state,
        value: state.value + payload.value,
      };
    case DECREASEBYTWO:
      return {
        ...state,
        value: state.value - payload.value,
      };

    default:
      return state;
  }
};

// Store
const store = Redux.createStore(createReducer);

// Action creators
const increase = (payload = {}) => {
  return {
    type: INCREASE,
    payload,
  };
};
const decrease = (payload = {}) => {
  return {
    type: DECREASE,
    payload,
  };
};

const increaseByTen = (payload) => {
  return {
    type: INCREASEBYTEN,
    payload,
  };
};
const decreaseByTwo = (payload) => {
  return {
    type: DECREASEBYTWO,
    payload,
  };
};

const render = () => {
  const { value } = store.getState();
  counter.innerText = value;
};

// initial load the value
render();

// subscribe -> Adds a change listener. It will be called any time an action is dispatched
store.subscribe(render);

// events invoked
increaseEl.addEventListener("click", () => {
  store.dispatch(increase());
});
decreaseEl.addEventListener("click", () => {
  store.dispatch(decrease());
});

increaseByTenEl.addEventListener("click", () => {
  store.dispatch(increaseByTen({ value: 10 }));
});
decreaseByTwoEl.addEventListener("click", () => {
  store.dispatch(decreaseByTwo({ value: 2 }));
});
