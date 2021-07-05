import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Episode, ShowDetails } from "../../types";
import { TVMazeApi } from "../../utils/tvMazeApi";
import { AppDispatch } from "../store";
import { setError } from "./error";

interface ShowState {
  details: ShowDetails | null;
  episodes: Array<Episode>;
  loading: boolean;
  episodesLoading: boolean;
}

const initialState: ShowState = {
  details: null,
  episodes: [],
  loading: false,
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
    setHideLoading: (state) => {
      state.loading = false;
      state.episodesLoading = false;
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

export const {
  setShowLoading,
  setShowDetails,
  setHideLoading,
  setEpisodesLoading,
  setEpisodes,
} = showSlice.actions;

export const fetchShowDetails =
  (id: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(setShowLoading());

      const details = await TVMazeApi.getShowById(id);

      dispatch(setShowDetails(details));
    } catch (error) {
      dispatch(setHideLoading());
      dispatch(setError(error.message));
    }
  };

export const fetchShowEpisodes =
  (id: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(setEpisodesLoading());

      const episodes = await TVMazeApi.getEpisodesByShowId(id);

      dispatch(setEpisodes(episodes));
    } catch (error) {
      dispatch(setHideLoading());
      dispatch(setError(error.message));
    }
  };

export default showSlice.reducer;
