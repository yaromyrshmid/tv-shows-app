import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  message: "",
};

export const errorSlice = createSlice({
  name: "error",
  initialState,
  reducers: {
    setError: (state, action: PayloadAction<string>) => {
      state.message = action.payload;
    },
    clearError: (state) => {
      // eslint-disable-next-line no-unused-vars
      state.message = "";
    },
  },
});

export const { setError, clearError } = errorSlice.actions;

export default errorSlice.reducer;
