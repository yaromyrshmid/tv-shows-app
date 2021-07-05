import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Episode } from "../../types";
import { IEpisodeParams, TVMazeApi } from "../../utils/tvMazeApi";
import { AppDispatch } from "../store";
import { setError } from "./error";

interface EpisodeState {
  details: Episode | null;
  loading: boolean;
}

const initialState: EpisodeState = {
  details: null,
  loading: false,
};

export const episodeSlice = createSlice({
  name: "episode",
  initialState,
  reducers: {
    setEpisodeLoading: (state) => {
      state.loading = true;
    },
    setEpisodeDetails: (state, action: PayloadAction<Episode>) => {
      state.details = action.payload;
      state.loading = false;
    },
    setHideLoading: (state) => {
      state.loading = false;
    },
    clearEpisodeDetails: () => initialState,
  },
});

export const {
  setEpisodeLoading,
  setEpisodeDetails,
  setHideLoading,
  clearEpisodeDetails,
} = episodeSlice.actions;

export const fetchEpisodeDetails =
  (params: IEpisodeParams) => async (dispatch: AppDispatch) => {
    try {
      dispatch(setEpisodeLoading());

      const details = await TVMazeApi.getEpisode(params);

      dispatch(setEpisodeDetails(details));
    } catch (error) {
      dispatch(setHideLoading());
      dispatch(setError(error.message));
    }
  };

export default episodeSlice.reducer;
