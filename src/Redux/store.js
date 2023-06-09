import { configureStore } from "@reduxjs/toolkit";
import { ApiNews } from "./ApiNews";
import newsContentSlice from "./newsContentSlice";
import headerSlice from "./headerSlice";
import categorySlice from "./categorySlice";
import newsSlice from "./newsSlice";






export const store = configureStore({
  reducer:{
    newsContentSlice,
    headerSlice,
    categorySlice,
    newsSlice,
    [ApiNews.reducerPath]:ApiNews.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ApiNews.middleware),
})