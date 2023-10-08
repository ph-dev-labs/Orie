import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { registerUser } from "../../api/registrationApi";
import { confirmOtp } from "../../api/otpConfirm";

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

export const registerUserAsync = createAsyncThunk(
  "registration/registerUser",
  async ({ email, password, number, userType }, { rejectWithValue }) => {
    try {
      const result = await registerUser({ email, password, number, userType });
      return result;
    } catch (error) {
      // Use rejectWithValue to pass the error message to the payload
      return rejectWithValue(error.message);
    }
  }
);

export const confirmOtpAsync = createAsyncThunk(
  "registration/confirmOtp",
  async ({ email, otp }, { rejectWithValue }) => {
    try {
      const result = await confirmOtp({email, otp});
      return result;
    } catch (error) {
      // Use rejectWithValue to pass the error message to the payload
      return rejectWithValue(error.message);
    }
  }
);

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
        state.errorMessage = action.payload;
      })
      .addCase(confirmOtpAsync.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(confirmOtpAsync.fulfilled, (state) => {
        state.isLoading = false;
        // Optionally, handle success here.
      })
      .addCase(confirmOtpAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload;
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
