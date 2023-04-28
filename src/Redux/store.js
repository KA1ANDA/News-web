import { configureStore } from "@reduxjs/toolkit";
import { ApiNews } from "./ApiNews";
import newsContentSlice from "./newsContentSlice";
import headerSlice from "./headerSlice";
import categorySlice from "./categorySlice"





export const store = configureStore({
  reducer:{
    newsContentSlice,
    headerSlice,
    categorySlice,
    [ApiNews.reducerPath]:ApiNews.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ApiNews.middleware),
})