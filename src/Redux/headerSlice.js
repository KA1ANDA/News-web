import { createSlice } from "@reduxjs/toolkit";


const headerSlice = createSlice({
  name:'headerSlice',
  initialState:{
    language:'en',
    setSearch:false,
  },
  reducers:{
    changeLanguage(state,action){
        if(state.language==='en'){
          state.language = 'ru'
        }else{
          state.language = 'en'
        }
    },
    toggleSearch(state){
      state.setSearch = !state.setSearch
    }
  }
})



export const {changeLanguage,toggleSearch} = headerSlice.actions;
export default headerSlice.reducer;