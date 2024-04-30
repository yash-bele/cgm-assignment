import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://cgm-assignment-api.vercel.app",
  }),
  tagTypes: ["Users"],
  endpoints: (builder) => ({
    loginUser: builder.mutation({ query: (payload) => ({ url: "/login", method: "POST", body: payload }) }),
    registerUser: builder.mutation({ query: (payload) => ({ url: "/register", method: "POST", body: payload }) }),
    getAllUsers: builder.query({ query: () => "/users", providesTags: ["Users"] }),
    getUser: builder.query({ query: () => "/user", providesTags: ["Users"] }),
  }),
});

export const { useLoginUserMutation, useRegisterUserMutation, useGetAllUsersQuery, useGetUserQuery } = api;
