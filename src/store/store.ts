import { configureStore } from "@reduxjs/toolkit";

import showReducer from "./reducers/show";
import episodeReducer from "./reducers/episode";

const store = configureStore({
  reducer: {
    show: showReducer,
    episode: episodeReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
