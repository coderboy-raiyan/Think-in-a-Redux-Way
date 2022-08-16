const counterContainerEl = document.getElementById("counters-container");
const addCounterBtnEl = document.getElementById("add-counter");
const resetBtnEl = document.getElementById("reset-btn");

const counterElement = [];

const initialState = {
  counters: [],
};

// action identifiers
const ADD_COUNTER = "ADD_COUNTER";
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";
const RESET = "RESET";

// action creators
const add_counter = (payload) => {
  return {
    type: ADD_COUNTER,
    payload,
  };
};

const increase_counter = (payload) => {
  return {
    type: INCREASE,
    payload,
  };
};
const decrease_counter = (payload) => {
  return {
    type: DECREASE,
    payload,
  };
};
const reset_counter = (payload = {}) => {
  return {
    type: RESET,
    payload,
  };
};

// Reducers
const counterReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_COUNTER:
      const isAlreadyAdded = state.counters.find(
        (counter) => counter.id === payload.id
      );
      if (isAlreadyAdded) {
        return state;
      }
      return {
        ...state,
        counters: [...state.counters, payload],
      };

    case INCREASE:
      const variableNum = Math.ceil(Math.random() * 5);

      const updatedIncrease = state.counters.map((counter) => {
        if (counter.id === payload.id) {
          return {
            ...counter,
            value: counter.value + variableNum,
          };
        }
        return counter;
      });
      return {
        ...state,
        counters: updatedIncrease,
      };
    case DECREASE:
      const updatedDecrease = state.counters.map((counter) => {
        if (counter.id === payload.id) {
          return {
            ...counter,
            value: counter.value <= 0 ? 0 : counter.value - 1,
          };
        }
        return counter;
      });
      return {
        ...state,
        counters: updatedDecrease,
      };

    case RESET:
      return {
        ...state,
        counters: state.counters.map((counter) => {
          return {
            ...counter,
            value: 0,
          };
        }),
      };

    default:
      return state;
  }
};

// Store
const store = Redux.createStore(counterReducer);

/*
 * Render all the counters in the UI
 * When user clicks the Add counter button it will Add counter in the UI
 */
const renderCounters = () => {
  const { counters } = store.getState();

  counterContainerEl.innerHTML = "";
  counters.forEach((element, i) => {
    counterContainerEl.insertAdjacentHTML(
      "beforeend",
      ` <div id="${element.id}"
    class="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow"
  >
    <div id="counter${i}" class="text-2xl font-semibold">${element.value}</div>
    <div class="flex space-x-3">
      <button id="increment${i}" class="${element.id} increment${i} bg-indigo-400 text-white px-3 py-2 rounded shadow">
        Increment
      </button>
      <button  id="decrement${i}" class="${element.id} increment${i} bg-red-400 text-white px-3 py-2 rounded shadow">
        Decrement
      </button>
    </div>`
    );
  });
};

store.subscribe(() => {
  // Add counter function
  renderCounters();

  // Increase and Decease Values of the counter
  const allButton = document
    .getElementById("counters-container")
    .querySelectorAll("button");
  allButton.forEach((button) => {
    button.addEventListener("click", () => {
      console.log(button.classList[1] === button.getAttribute("id"));
      if (button.classList[1] === button.getAttribute("id")) {
        store.dispatch(increase_counter({ id: button.classList[0] }));
      } else {
        store.dispatch(decrease_counter({ id: button.classList[0] }));
      }
    });
  });
});

// Generate a counter ID
let counterId = 1;

// addCounters function will create counters
function addCounters() {
  store.dispatch(
    add_counter({
      id: `counter${counterId++}`,
      value: 0,
    })
  );
}
// Resets all the increase and decrease values
function reset() {
  store.dispatch(reset_counter());
}

// Initially Renders a counter in the UI
addCounters();

// Events for add counter button and reset button
addCounterBtnEl.addEventListener("click", addCounters);
resetBtnEl.addEventListener("click", reset);
