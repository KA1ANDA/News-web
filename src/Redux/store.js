import { configureStore } from "@reduxjs/toolkit";
import { ApiNews } from "./ApiNews";





export const store = configureStore({
  reducer:{
    [ApiNews.reducerPath]:ApiNews.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ApiNews.middleware),
})