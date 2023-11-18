import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoNewsApiHeader = {
  "X-RapidAPI-Key": process.env.REACT_APP_NEWS_RAPIDAPI_KEY,
  "X-RapidAPI-Host": process.env.REACT_APP_NEWS_RAPIDAPI_HOST,
};

const baseUrl = process.env.REACT_APP_NEWS_API_URL;

const createRequest = (url) => ({
  url,
  headers: cryptoNewsApiHeader,
});

export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl, mode: "cors" }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ newsCategory, count }) =>
        createRequest(
          `/search?q=${newsCategory}&pageSize=${count}&langauage=en)&sortBy=timestamp`
        ),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
