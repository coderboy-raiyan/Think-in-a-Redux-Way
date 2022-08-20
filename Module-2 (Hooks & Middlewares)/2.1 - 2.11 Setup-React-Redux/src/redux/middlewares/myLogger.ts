import rootReducer from "../rootReducer";

// create Our middleware
const myLogger = (store: any) => (next: any) => (action: any) => {
  console.log("Before", store.getState());

  const updateValue = [action].reduce(rootReducer, store.getState());
  console.log("Upcoming ", updateValue);

  return next(action);
};

export default myLogger;
