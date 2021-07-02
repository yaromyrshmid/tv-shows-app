import { configureStore } from "@reduxjs/toolkit";

import showReducer from "./reducers/show";

const store = configureStore({
  reducer: {
    show: showReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
