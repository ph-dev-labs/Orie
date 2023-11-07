import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice } from "@reduxjs/toolkit";

const ASYNC_STORAGE_KEY = "Auth_token";
const initialState = {
  user: null,
  token: null,
  error: null,
  userType: null,
  isVerified: null
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      const { userEmail, token,userType, emailVerified } = action.payload;
      state.user = userEmail;
      state.token = token;
      state.error = null;
      state.userType = userType;
      state.isVerified = emailVerified;
    },
    loginFailure: (state, action) => {
      state.error = action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.error = null;
      state.isVerified = null;
      state.userType = null
      AsyncStorage.removeItem( ASYNC_STORAGE_KEY).catch((error) => {
        console.error("Error clearing token from AsyncStorage:", error);
      });
    },
  },
});

export const { loginFailure, loginSuccess, logout } = loginSlice.actions;
export const selectUser = (state) => state.login.user;
export const selectToken = (state) => state.login.token;

export default loginSlice.reducer;

const handleTokenStorage = async (token) => {
  try {
    await AsyncStorage.setItem(ASYNC_STORAGE_KEY, token);
  } catch (error) {
    console.error("Error storing token in AsyncStorage:", error);
    throw new Error("Token storage failed");
  }
};

export const moveToShopPage = (
  email,
  password,
  setIsLoading,
  loginApi,
  navigate,
  setEmailField,
  setPassword,
  setVisible
) => {
  return async (dispatch) => {
    setIsLoading(true);

    try {
      const data = await loginApi({ email, password }).unwrap();
      setIsLoading(false);
      await handleTokenStorage(data.token);
      dispatch(loginSuccess(data));    
      setEmailField("");
      setPassword("");
      setVisible(true);
      setTimeout(() => {
        setVisible(false);
        navigate.navigate("home");
      }, 2000);
    } catch (error) {
      setIsLoading(false);
      dispatch(loginFailure(error.message));
      // Handle error, e.g., display error message to the user
      console.error("Login failed:", error);
    }
  };
};
