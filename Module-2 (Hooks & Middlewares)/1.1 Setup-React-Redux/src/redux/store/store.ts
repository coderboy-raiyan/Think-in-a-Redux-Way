import { legacy_createStore as createStore } from "redux";
import rootReducer from "./../rootReducer";

const store = createStore(rootReducer);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = ReturnType<typeof store.dispatch>;
export default store;
