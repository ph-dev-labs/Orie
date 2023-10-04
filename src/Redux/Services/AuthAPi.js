import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const registrationApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://orieapi.onrender.com/api" }),
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (userData) => ({
        url: '/user', // Update the URL endpoint as needed
        method: 'POST',
        body: userData,
      }),
    }),
  }),
});

export const { useRegisterMutation } = registrationApi;
