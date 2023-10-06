// redux/slices/registrationSlice.js
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { registerUser } from "../../api/registrationApi";
import { confirmOtp } from "../../api/otpConfirm";


const initialState = {
  email: "",
  password: "",
  userType: "",
  number: "",
  confirmPassword: "",
  otp: "",
  isLoading: false,
  isError: false,
  errorMessage: "",
};

export const registerUserAsync = createAsyncThunk(
  "registration/registerUser",
  async (userData,) => {
    try {
      const result = await registerUser(userData);
      return result;
      
    } catch (error) {
      throw error;
    }
  }
);

export const confirmOtpAsync = createAsyncThunk(
  async(email,otp) => {
    try {
      const result = await confirmOtp(email, otp)
      return result
    } catch (error) {
      throw error
    }
  }
)

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
  extraReducers: (builder) => {
    builder
      .addCase(registerUserAsync.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(registerUserAsync.fulfilled, (state) => {
        state.isLoading = false;
        // Optionally, handle success here.
      })
      .addCase(registerUserAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.error.message;
      });
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
