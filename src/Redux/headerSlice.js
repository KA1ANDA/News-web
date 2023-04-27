import { createSlice } from "@reduxjs/toolkit";


const headerSlice = createSlice({
  name:'headerSlice',
  initialState:{
    language:'en'
  },
  reducers:{
    changeLanguage(state,action){
        if(state.language=='en'){
          state.language = 'ru'
        }else{
          state.language = 'en'
        }
    }
  }
})



export const {changeLanguage} = headerSlice.actions;
export default headerSlice.reducer;