import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const BASE_URL = 'https://newsapi.org/v2/';
const API_KEY ="8e4083f1fd904e92bb7466df4be1f8a1";



export const ApiNews = createApi ({
  reducerPath:"ApiNews",
  tagTypes:['news','TopHeadlines','search'],
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
      query: () => `everything?q=tesla`,
      providesTags: ['news'],
    }),


    //for main news
    getNews:builder.query({
      query: (args) =>{
        const {number,lang,newsCategory} = args;
        return{
          url:`top-headlines?category=${newsCategory}&pageSize=${number}&sortBy=publishedAt&language=${lang}`,
        }
      },
      providesTags: ['news'],
    }),


    //for search
    

    getNewsFromSearch:builder.query({
      query: (args) => {
        const {value,number,lang} = args;
        return{
          url:`everything?q=${value}&pageSize=${number}&language=${lang}`,
        }
      },
      providesTags: ['search'],
    }),


    //for sidebar news defaul top headlines
    getTopHeadlines:builder.query({
      query: (pageSize) => `top-headlines?country=us&sortBy=publishedAt&pageSize=${pageSize}`,
      providesTags: ['TopHeadlines'],
    })
  })

});


export const{useGetNewsQuery,useGetTopHeadlinesQuery,useGetDataQuery,useGetNewsFromSearchQuery} = ApiNews;
