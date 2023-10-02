import { configureStore } from '@reduxjs/toolkit';
import { registrationApi } from '../Redux/Services/AuthAPi';

const store = configureStore({
  reducer: {
    [registrationApi.reducerPath]: registrationApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(registrationApi.middleware),
});

export default store;
