import { createSlice } from "@reduxjs/toolkit";
import faker from "faker";
import Cookies from "js-cookie";

const STORAGE_KEY = 'Auth';

const initialState = {
    productList: [],
    totalProfit:0,
    income:0,
    expense:0
   
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
        setTotalProfit: (state) => {
            state.totalProfit = (state.income - state.expense / 60) * 100
        },
        setIncome:(state ) => {
            state.income = faker.datatype.number({ min: 10, max: 58 })
        },
        setExpense: (state ) => {
            state.expense =faker.datatype.number({ min: 10, max: 58 })
        },
    }
});

export const { setLogin, setProductList ,setTotalProfit , setIncome,  setExpense } = productSlice.actions;

export default productSlice.reducer;
