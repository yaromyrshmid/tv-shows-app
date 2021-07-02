import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ShowDetails } from "../../types/ShowDetails";
import { TVMazeApi } from "../../utils/tvMazeApi";
import { AppDispatch } from "../store";

interface ShowState {
  details: ShowDetails | null;
  loading: boolean;
  error: string;
}

const initialState: ShowState = {
  details: null,
  loading: false,
  error: "",
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
      state.error = action.payload;
    },
  },
});

export const { setShowLoading, setShowDetails, setShowError } =
  showSlice.actions;

export const fetchShowDetails = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(setShowLoading);

    const details = await TVMazeApi.getShowByIMDBId();
    dispatch(setShowDetails(details));
  } catch (error) {
    dispatch(setShowError(error.message));
  }
};

export default showSlice.reducer;
