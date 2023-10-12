import { AsyncStorage } from 'react-native';
import { createSlice } from "@reduxjs/toolkit";


const ASYNC_STORAGE_KEY = "Auth_token"; // Consistent key for AsyncStorage


const initialState = {
  user: null,
  token: null,
  error: null,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload;
      state.token = action.payload;
      state.error = null; // Clear any previous errors on successful login
    },

    loginFailure: (state, action) => {
      state.error = action.payload;
    },

    logout: (state) => {
      state.user = null;
      state.token = null;
      state.error = null;
      // Clear the token in AsyncStorage when logging out
      AsyncStorage.removeItem(ASYNC_STORAGE_KEY).catch((error) => {
        console.error("Error clearing token from AsyncStorage:", error);
      });
    },
  },
});

export const { loginFailure, loginSuccess, logout } = loginSlice.actions;


export const selectUser = (state) => state.auth.user;

export default loginSlice.reducer;
