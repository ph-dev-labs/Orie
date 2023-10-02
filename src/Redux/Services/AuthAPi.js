import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const registrationApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "https://orie-500a3-default-rtdb.firebaseio.com/user.json" }),
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (userData) => ({
        method: 'POST',
        body: userData,
      }),
    }),
  }),
});

export const { useRegisterMutation } = registrationApi;
