import { configureStore } from "@reduxjs/toolkit";
import { ApiNews } from "./ApiNews";
import newsContentSlice from "./newsContentSlice";





export const store = configureStore({
  reducer:{
    newsContentSlice,
    [ApiNews.reducerPath]:ApiNews.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ApiNews.middleware),
})