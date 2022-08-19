import { legacy_createStore as createStore } from "redux";
import counterReducer from "../counter/counterReducer";

const store = createStore(counterReducer);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = ReturnType<typeof store.dispatch>;
export default store;
