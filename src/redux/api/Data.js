import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const dataApi = createApi({
  reducerPath: 'data',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://github.com/sannlynnhtun-coding/pos_frontend_react/blob/main/src/db/' }), 
  endpoints: (builder) => ({
    getData: builder.query({
      query: () => 'db.json',
      mode: 'no-cors' 
    }),
  }),
});

export const { useGetDataQuery } = dataApi;