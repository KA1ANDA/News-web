import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const BASE_URL = 'https://newsapi.org/v2/';
const API_KEY ="36f2177e737f495e921ca0ed4517673e";

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
        const {value,number} = args;
        return{
          url:`everything?q=${value}&pageSize=${number}`,
        }
      },
      providesTags: ['search'],
    }),


    //for sidebar news defaul top headlines
    getTopHeadlines:builder.query({
      query: () => `top-headlines?country=us&sortBy=publishedAt`,
      providesTags: ['TopHeadlines'],
    })
  })

});


export const{useGetNewsQuery,useGetTopHeadlinesQuery,useGetDataQuery,useGetNewsFromSearchQuery} = ApiNews;
