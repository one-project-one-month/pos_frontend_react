// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const token = "pk_test_c3Ryb25nLWpheS01OS5jbGVyay5hY2NvdW50cy5kZXYk";

// Define a service using a base URL and expected endpoints
export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://github.com/sannlynnhtun-coding/pos_frontend_react/blob/main/src/db/",
  }),

  tagTypes: ["auth"],
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (user) => ({
        url: "/sign-up",
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["auth"],
    }),

    login: builder.mutation({
      query: (user) => ({
        url: "/sign-in",
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["auth"],
    }),

    logout: builder.mutation({
      query: () => ({
        url: "/user-logout",
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
      }),
    }),
    Environment: builder.query({
      query: () => ({
        url: "/dev_browser",
        method: "POST",
        // body: data,
        headers: { Authorization: `Bearer ${token}` },
      }),
      providesTags: ["auth"],
    }),

    getProductsCategory: builder.query({
      query: () => ({
        url: "/db.json",
        method: "GET",
        mode:'no-cors',
        // body: data,
      }),
      providesTags: ["auth"],
    }),

    
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useRegisterMutation,
  useLoginMutation,
  useLazyEnvironmentQuery,
  useLogoutMutation,
  useGetProductsCategoryQuery
} = authApi;
