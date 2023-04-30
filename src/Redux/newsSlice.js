import { createSlice } from "@reduxjs/toolkit";


const newsSlice = createSlice({
  name:'newsSlice',
  initialState:{
    pageSizeMain:5,
    pageSizeSidebar:3
  },
  reducers:{
    changePageSize(state){
      state.pageSizeMain = state.pageSizeMain+15
      state.pageSizeSidebar = state.pageSizeSidebar+5
    }
   }
})



export const {changePageSize} = newsSlice.actions;
export default newsSlice.reducer;