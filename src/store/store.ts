import { configureStore } from "@reduxjs/toolkit";

import showReducer from "./reducers/show";
import episodeReducer from "./reducers/episode";
import errorReducer from "./reducers/error";

const store = configureStore({
  reducer: {
    show: showReducer,
    episode: episodeReducer,
    error: errorReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
