import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isSuccessful: false
  };

export const newShopSlice = createSlice({
    name: "newShop",
    initialState,
    reducers: {
      setIsSuccessful: (state, action) => {
        state.isSuccessful = action.payload;
      }
    }
  });

export const {setIsSuccessful,setIsNewShopClick} = newShopSlice.actions;
export default newShopSlice.reducer;
  