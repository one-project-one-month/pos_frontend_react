// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const token = "pk_test_c3Ryb25nLWpheS01OS5jbGVyay5hY2NvdW50cy5kZXYk";

// Define a service using a base URL and expected endpoints
export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://pos-frontend-next-ruby.vercel.app/api/v1",
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

    createProduct: builder.mutation({
      query: (data) => ({
        url: "/products",
        method: "POST",
        body: data,
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

    
    getProducts: builder.query({
      query: (id) => ({
        url: id? `/products/${id}`: "/products",
        method: "GET",
        // body: data,
      }),
      providesTags: ["auth"],
    }),
    deleteProductsCategory: builder.mutation({
      query: (id) => ({
        url: `/product-categories/${id}`,
        method: "DELETE",
        // body: data,
      }),
      invalidatesTags: ["auth"],
    }),
    addProductsCategory: builder.mutation({
      query: (data) => ({
        url: `/product-categories`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["auth"],
    }),
    addProducts: builder.mutation({
      query: (data) => ({
        url: `/products`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["auth"],
    }),
    updateProducts: builder.mutation({
      query: ({data,id}) => ({
        url: `/products/${id}`,
        method: "PATCH",
        body: data,
      }),
      
      invalidatesTags: ["auth"],
    }),
    updateCategory: builder.mutation({
      query: ({data,id}) => ({
        url: `/product-categories/${id}`,
        method: "PATCH",
        body: data,
      }),
      
      invalidatesTags: ["auth"],
    }),
    getProductsCategory: builder.query({
      query: (id) => ({
        url: id?.length > 0 ? `/product-categories/${id}` : "/product-categories",
        method: "GET",

        // body: data,
      }),
      providesTags: ["auth"],
    }),
    deleteProducts: builder.mutation({
      query: (id) => ({
        url: `/products/${id}`,
        method: "DELETE",
        // body: data,
      }),
      invalidatesTags: ["auth"],
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
  useGetProductsCategoryQuery,
  useCreateProductMutation,
  useGetProductsQuery,
  useDeleteProductsCategoryMutation,
  useDeleteProductsMutation,
  useAddProductsCategoryMutation,
  useAddProductsMutation,
  useUpdateProductsMutation,
  useUpdateCategoryMutation
} = authApi;
