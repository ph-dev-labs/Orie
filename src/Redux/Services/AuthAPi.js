import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const registrationApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://orieapi.onrender.com/api" }),
  endpoints: (builder) => ({
    register: builder.mutation({
      query: ({email,phone,password,userType}) => ({
        url: '/user',
        method: 'POST',
        body: {email,phone,password,userType},
      }),
    }),
    confirmOtp: builder.mutation({
      query: ({ otp, email }) => ({ // Combine otp and email into an object
        url: "/confirm",
        method: "POST",
        body: { otp, email }, // Send them as an object
      }),
    }),
    login: builder.mutation({
      query: ({ email, password }) => ({ // Combine email and password into an object
        url: "/login",
        method: "POST",
        body: { email, password }, // Send them as an object
      }),
    }),
  }),
});

export const { useRegisterMutation, useConfirmOtpMutation, useLoginMutation } = registrationApi;
