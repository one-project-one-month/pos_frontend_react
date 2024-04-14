import { createSlice } from "@reduxjs/toolkit";
import faker from "faker";
import Cookies from "js-cookie";

const initialState = {
 categoryList:[],
 totalProfit:0,
    income:0,
    expense:0,
     labels : [
      "2015",
      "2016",
      "2017",
      "2018",
      "2019",
      "2020",
      "2021",
      "2022",
      "2023",
      "2024",
    ]
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

    },
    setCategoryList: (state,{payload}) => {
      state.categoryList = payload.categoryList
    },
    setTotalProfit: (state, {payload}) => {
      state.totalProfit = payload
  },
  setIncome:(state,{payload} ) => {
      state.income = payload?.map(() => faker.datatype.number({ min: 10, max: 58 }) )
  },
  setExpense: (state,{payload} ) => {
      state.expense = payload?.map(() => faker.datatype.number({ min: 10, max: 58 }) )
  },
  },
});

export const { setLogin,setCategoryList, setExpense, setIncome , setTotalProfit } =
  authSlice.actions;
export default authSlice.reducer;
