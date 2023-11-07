import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ASYNC_STORAGE_KEY = "Auth_token";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://orieapi.onrender.com/api",
  prepareHeaders: async (headers, { getState }) => {
    const token = await getToken();
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

let token = null;

const getToken = async () => {
  try {
    token = await AsyncStorage.getItem(ASYNC_STORAGE_KEY);
    return token;
  } catch (error) {
    console.error("Error retrieving token:", error);
    return null;
  }
};

export const registrationApi = createApi({
  baseQuery,
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (userData) => ({
        url: "/user",
        method: "POST",
        body: userData,
      }),
    }),
    confirmOtp: builder.mutation({
      query: ({ otp, email }) => ({
        url: "/confirm",
        method: "POST",
        body: { otp, email },
      }),
    }),
    checkEmail: builder.mutation({
      query: (email) => ({
        url: "/check-email",
        method: "POST",
        body: email,
      }),
    }),
    userLogin: builder.mutation({
      query: ({ email, password }) => ({
        url: "/login",
        method: "POST",
        body: { email, password },
      }),
    }),
    forgotPassword: builder.mutation({
      query: (email) => ({
        url: "/forgot-password",
        method: "POST",
        body: email,
      }),
    }),
    resetPassword: builder.mutation({
      query: ({ email, newPassword }) => ({
        url: "/reset-password",
        method: "POST",
        body: { email, newPassword },
      }),
    }),
    resetPasswordOtp: builder.mutation({
      query: ({ email, otp }) => ({
        url: "/confirm-otp",
        method: "POST",
        body: { email, otp },
      }),
    }),
    getProduct: builder.query({
      query: () => ({
        url: "/user/dashboard",
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
  }),
});

export const {
  useRegisterMutation,
  useCheckEmailMutation,
  useUserLoginMutation,
  useConfirmOtpMutation,
  useForgotPasswordMutation,
  useGetProductQuery,
  useResetPasswordOtpMutation,
  useResetPasswordMutation,
} = registrationApi;
