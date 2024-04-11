import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const STORAGE_KEY = 'Auth';

const initialState = {
    productList: [],
   
};

const storedItems = Cookies.get(STORAGE_KEY) ? JSON.parse(Cookies.get(STORAGE_KEY)) : null;

if (storedItems) {

  initialState.isLogin = storedItems;
  

}

export const productSlice = createSlice({
    name: "productSlice",
    initialState,
    reducers: {
        setLogin: (state, { payload }) => {
            state.isLogin = payload;
            Cookies.set(STORAGE_KEY, JSON.stringify(state.isLogin));
        },
        setProductList: (state, { payload }) => {
            state.productList = payload.productList;
        },
    }
});

export const { setLogin, setProductList } = productSlice.actions;

export default productSlice.reducer;
