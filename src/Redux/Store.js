import { configureStore } from '@reduxjs/toolkit';
import { registrationApi } from '../Redux/Services/AuthAPi';
import registrationReducer from '../Redux/Auth/registerSlice'; // Import the registrationSlice reducer
import loginReducer from "../Redux/Auth/Login"
import resetPassword from './Auth/resetPassword';
import getProductReducer from "./Application/Application"


const store = configureStore({
  reducer: {
    [registrationApi.reducerPath]: registrationApi.reducer,
    registration: registrationReducer, // Add the registrationSlice reducer here
    login: loginReducer,
    resetPassword: resetPassword,
    product: getProductReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(registrationApi.middleware),
});

export default store;
