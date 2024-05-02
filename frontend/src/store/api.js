import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getCookie } from "cookies-next";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://cgm-assignment-api.vercel.app",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token || getCookie("token");
      headers.set("Authorization", `Bearer ${token}`);
      return headers;
    },
  }),
  tagTypes: ["Users"],
  endpoints: (builder) => ({
    loginUser: builder.mutation({ query: (payload) => ({ url: "/login", method: "POST", body: payload }), invalidatesTags: ["Users"] }),
    registerUser: builder.mutation({ query: (payload) => ({ url: "/register", method: "POST", body: payload }), invalidatesTags: ["Users"] }),
    getAllUsers: builder.query({ query: () => ({ url: "/users", method: "GET" }), providesTags: ["Users"] }),
    getUser: builder.query({ query: () => ({ url: "/user", method: "GET" }), providesTags: ["Users"] }),
    followUser: builder.mutation({
      query: ({ userId, pointerId }) => ({ url: `/follow/${pointerId}`, method: "GET" }),
      invalidatesTags: ["Users"],
      async onQueryStarted({ userId, pointerId }, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          api.util.updateQueryData("getAllUsers", undefined, (allUsers) => {
            const userIndex = allUsers.findIndex((i) => i._id === pointerId);
            if (allUsers[userIndex].followers.includes(userId)) {
              allUsers[userIndex] = { ...allUsers[userIndex], followers: allUsers[userIndex].followers.filter((i) => i !== userId) };
            } else {
              allUsers[userIndex].followers.push(userId);
            }
          })
        );
        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
      },
    }),
  }),
});

export const { useLoginUserMutation, useRegisterUserMutation, useGetAllUsersQuery, useGetUserQuery, useFollowUserMutation } = api;
