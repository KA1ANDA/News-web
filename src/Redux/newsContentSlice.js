import { createSlice } from "@reduxjs/toolkit";


const newsContentSlice = createSlice({
  name:'newsContentSlice',
  initialState:{
    content:''
  },
  reducers:{
    addContent(state,action){
      state.content=action.payload
    }
  }
})



export const {addContent} = newsContentSlice.actions;
export default newsContentSlice.reducer;