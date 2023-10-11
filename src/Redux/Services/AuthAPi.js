import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const registrationApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://orieapi.onrender.com/api" }),
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (userData) => ({
        url: "/user", // Update the URL endpoint as needed
        method: "POST",
        body: userData,
      }),
    }),
    confirmOtp: builder.mutation({
      query: ({ otp, email }) => ({
        url: "/confirm",
        method: "POST",
        body: {otp, email}
      }),
    }),
    checkEmail: builder.mutation({
      query:(email) => ({
        url: "/check",
        method: "POST",
        body: email
      })
    }),
    userLogin: builder.mutation({
      query: ({email, password}) => ({
        url: "/login",
        method: "POST",
        body: {email, password}
      })
    })
  }),
});

export const { useRegisterMutation, useCheckEmailMutation, useUserLoginMutation, useConfirmOtpMutation } = registrationApi;
