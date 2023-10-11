import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  password: "",
  userType: "",
  number: "",
  confirmPassword: "",
  otp: "",
  isLoading: false,
  isError: false,
  email: "",
  errorMessage: "",
};


const registrationSlice = createSlice({
  name: "registration",
  initialState,
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setUserType: (state, action) => {
      state.userType = action.payload;
    },
    setNumber: (state, action) => {
      state.number = action.payload;
    },
    setConfirmPassword: (state, action) => {
      state.confirmPassword = action.payload;
    },
    setOtp: (state, action) => {
      state.otp = action.payload;
    },
    setError: (state, action) => {
      state.isError = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
  
});

export const {
  setEmail,
  setPassword,
  setUserType,
  setNumber,
  setConfirmPassword,
  setOtp,
  setError,
  setLoading,
} = registrationSlice.actions;

export const selectRegistration = (state) => state.registration;

export default registrationSlice.reducer;
