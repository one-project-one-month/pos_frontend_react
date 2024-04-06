import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
 
};

const STORAGE_KEY = 'Auth';

//____________________________________________________storedItems_____________________Null_____//
const storedItems = Cookies.get(STORAGE_KEY) ? JSON.parse(Cookies.get(STORAGE_KEY)) : null;

if (storedItems) {

  initialState.isLogin = storedItems;
  

}

export const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    setLogin: (state,{payload})=> {
      state.isLogin = payload
      Cookies.set(STORAGE_KEY, JSON.stringify(state.isLogin));

    }
  },
});

export const { setLogin } =
  authSlice.actions;
export default authSlice.reducer;
