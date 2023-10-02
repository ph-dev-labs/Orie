// registrationSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  password: "",
  userType: "",
  number: "",
  confirmPassword: "",
  otp: ""
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
    setNumber: (state, action) => {
      state.number = action.payload;
    },
    setConfirmPassword: (state, action) => {
      state.confirmPassword = action.payload;
    },
    setUserType: (state, action) => {
      state.userType = action.payload;
    },
    setOtp: (state, action) => {
        state.otp = action.payload;
      },
  },
});

export const { setEmail, setPassword, setUserType, setNumber, setConfirmPassword, setOtp } = registrationSlice.actions;
export default registrationSlice.reducer;
