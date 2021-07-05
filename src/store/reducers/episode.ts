import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Episode } from "../../types";
import { IEpisodeParams, TVMazeApi } from "../../utils/tvMazeApi";
import { AppDispatch } from "../store";

interface EpisodeState {
  details: Episode | null;
  loading: boolean;
  error: string;
}

const initialState: EpisodeState = {
  details: null,
  loading: false,
  error: "",
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
    setEpisodeError: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    clearEpisodeDetails: () => initialState,
  },
});

export const {
  setEpisodeLoading,
  setEpisodeDetails,
  setEpisodeError,
  clearEpisodeDetails,
} = episodeSlice.actions;

export const fetchEpisodeDetails =
  (params: IEpisodeParams) => async (dispatch: AppDispatch) => {
    try {
      dispatch(setEpisodeLoading());

      const details = await TVMazeApi.getEpisode(params);

      dispatch(setEpisodeDetails(details));
    } catch (error) {
      dispatch(setEpisodeError(error.message));
    }
  };

export default episodeSlice.reducer;
