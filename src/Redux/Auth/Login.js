import { createSlice } from "@reduxjs/toolkit";
import { useLoginMutation } from "../Services/AuthAPi";

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    currentUser: null,
    token: null,
    isLoading: null,
    error: null,
  },
  reducers: {
    loginStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    loginSuccess: (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    loginFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.isLoading = false;
      state.error = null;
    },
  },
});
