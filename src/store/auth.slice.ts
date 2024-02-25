import { createSlice } from "@reduxjs/toolkit";

type InitialState = {};

const initialState: InitialState = {};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetAuth: () => {},
  },
});

export const { resetAuth } = authSlice.actions;

const authReducer = authSlice.reducer;
export default authReducer;
