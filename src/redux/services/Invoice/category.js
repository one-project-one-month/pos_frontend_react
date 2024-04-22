import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedCategory: '',
    id:null
  };

export const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {
      updateSelectedCategory: (state, action) => {
        state.selectedCategory = action.payload;
      },
      setId :(state, action) => {
        state.id = action.payload;
      }
    }
  });

export const {updateSelectedCategory,setId} = categorySlice.actions;
export default categorySlice.reducer;