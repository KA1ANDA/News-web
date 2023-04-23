import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const BASE_URL = 'https://newsapi.org/v2/';
const API_KEY ="2c67406b9c8342c88437d6b1eede6681";

export const ApiNews = createApi ({
  reducerPath:"ApiNews",
  tagTypes:['Tesla'],
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