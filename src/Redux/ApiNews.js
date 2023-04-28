import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const BASE_URL = 'https://newsapi.org/v2/';
const API_KEY ="8e4083f1fd904e92bb7466df4be1f8a1";

export const ApiNews = createApi ({
  reducerPath:"ApiNews",
  tagTypes:['news','TopHeadlines'],
  baseQuery:fetchBaseQuery({
    baseUrl:BASE_URL,
    prepareHeaders: (headers) => {
      headers.set('Authorization', `Bearer ${API_KEY}`);
      return headers;
    }  
  }),
  
  endpoints:(builder) => ({

    //for content
    getData:builder.query({
      query: (lang) => `everything?q=tesla&language=${lang}`,
      providesTags: ['Tesla'],
    }),



    getNews:builder.query({
      query: (args) =>{
        const {number,lang,newsCategory} = args;
        return{
          url:`top-headlines?category=${newsCategory}&pageSize=${number}&sortBy=publishedAt&language=${lang}`,
        }
      },
      providesTags: ['news'],
    }),



    //for sidebar news defaul top headlines
    getTopHeadlines:builder.query({
      query: () => `top-headlines?country=us&sortBy=publishedAt`,
      providesTags: ['TopHeadlines'],
    })
  })

});


export const{useGetNewsQuery,useGetTopHeadlinesQuery,useGetDataQuery} = ApiNews;
