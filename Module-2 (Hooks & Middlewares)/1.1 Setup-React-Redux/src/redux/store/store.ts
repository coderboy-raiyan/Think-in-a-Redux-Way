import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./../rootReducer";

// create Our middleware
const myLogger = (store: any) => (next: any) => (action: any) => {
  console.log("Before", store.getState());

  const updateValue = [action].reduce(rootReducer, store.getState());
  console.log("Upcoming ", updateValue);

  return next(action);
};

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(myLogger))
);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = ReturnType<typeof store.dispatch>;
export default store;
