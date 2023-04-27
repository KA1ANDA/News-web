import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const BASE_URL = 'https://newsapi.org/v2/';
const API_KEY ="2c67406b9c8342c88437d6b1eede6681";

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

    getData:builder.query({
      query: (lang) => `everything?q=tesla&language=${lang}`,
      providesTags: ['Tesla'],
    }),


    getEveryTeslaNews:builder.query({
      query: (args) =>{
        const {number,lang} = args;
        return{
          url:`everything?q=tesla&pageSize=${number}&language=${lang}`,
        }
      },
      providesTags: ['Tesla'],
    }),


    getTopHeadlines:builder.query({
      query: () => `top-headlines?country=us`,
      providesTags: ['TopHeadlines'],
    })
  })

});


export const{useGetEveryTeslaNewsQuery,useGetTopHeadlinesQuery,useGetDataQuery} = ApiNews;
