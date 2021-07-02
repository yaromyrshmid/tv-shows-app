import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Episode, ShowDetails } from "../../types";
import { TVMazeApi } from "../../utils/tvMazeApi";
import { AppDispatch } from "../store";

interface ShowState {
  details: ShowDetails | null;
  episodes: Array<Episode>;
  loading: boolean;
  error: string;
  episodesLoading: boolean;
}

const initialState: ShowState = {
  details: null,
  episodes: [],
  loading: false,
  error: "",
  episodesLoading: false,
};

export const showSlice = createSlice({
  name: "show",
  initialState,
  reducers: {
    setShowLoading: (state) => {
      state.loading = true;
    },
    setShowDetails: (state, action: PayloadAction<ShowDetails>) => {
      state.details = action.payload;
      state.loading = false;
    },
    setShowError: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.episodesLoading = false;
      state.error = action.payload;
    },
    setEpisodesLoading: (state) => {
      state.episodesLoading = true;
    },
    setEpisodes: (state, action: PayloadAction<Array<Episode>>) => {
      state.episodes = action.payload;
      state.episodesLoading = false;
    },
  },
});

const {
  setShowLoading,
  setShowDetails,
  setShowError,
  setEpisodesLoading,
  setEpisodes,
} = showSlice.actions;

export const fetchShowDetails =
  (id: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(setShowLoading);

      const details = await TVMazeApi.getShowById(id);

      dispatch(setShowDetails(details));
    } catch (error) {
      dispatch(setShowError(error.message));
    }
  };

export const fetchShowEpisodes =
  (id: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(setEpisodesLoading);

      const episodes = await TVMazeApi.getEpisodesByShowId(id);

      dispatch(setEpisodes(episodes));
    } catch (error) {
      dispatch(setShowError(error.message));
    }
  };

export default showSlice.reducer;
