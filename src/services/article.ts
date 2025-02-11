import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query";

export const articleApi = createApi({
  reducerPath: "articleApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (builder) => ({
    getSummary: builder.query({
      query: (params) => "test",
    }),
  }),
});