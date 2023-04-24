import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const BASE_URL = 'https://newsapi.org/v2/';
const API_KEY ="8e4083f1fd904e92bb7466df4be1f8a1";

export const ApiNews = createApi ({
  reducerPath:"ApiNews",
  tagTypes:['Tesla','TopHeadlines'],
  baseQuery:fetchBaseQuery({
    baseUrl:BASE_URL,
    prepareHeaders: (headers) => {
      headers.set('Authorization', `Bearer ${API_KEY}`);
      return headers;
    }  
  }),
  
  endpoints:(builder) => ({
    getEveryTeslaNews:builder.query({
      query: (number) =>`everything?q=tesla&pageSize=${number}`,
      providesTags: ['Tesla'],
    })
  })

});


export const{useGetEveryTeslaNewsQuery} = ApiNews;
