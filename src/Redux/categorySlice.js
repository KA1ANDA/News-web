import { createSlice } from "@reduxjs/toolkit";


const categorySlice = createSlice({
  name:'categorySlice',
  initialState:{
    category:'sports',
  },
  reducers:{
    changeCategory(state,action){
      state.category = action.payload
    }
   }
})



export const {changeCategory} = categorySlice.actions;
export default categorySlice.reducer;