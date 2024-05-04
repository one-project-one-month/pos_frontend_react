import { createSlice } from "@reduxjs/toolkit";
import faker from "faker";
import Cookies from "js-cookie";

const initialState = {
  categoryList: [],
  productList: [],
  totalProfit: 0,
  income: 0,
  expense: 0,
  totalMonthlyProfit: 0,
  monthlyIncome: 0,
  totalDailyProfit: 0,
  dailyIncome: 0,
  monthlyExpense: 0,
  dailyExpense: 0,
  cash: 0,
  wallet: 0,
};

const STORAGE_KEY = "Auth";

//____________________________________________________storedItems_____________________Null_____//
const storedItems = Cookies.get(STORAGE_KEY)
  ? JSON.parse(Cookies.get(STORAGE_KEY))
  : null;

if (storedItems) {
  initialState.isLogin = storedItems;
}

export const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    setLogin: (state, { payload }) => {
      state.isLogin = payload;
      Cookies.set(STORAGE_KEY, JSON.stringify(state.isLogin));
    },
    setProductList: (state, { payload }) => {
      state.productList = payload;
    },
    setCategoryList: (state, { payload }) => {
      state.categoryList = payload;
    },
    setTotalProfit: (state, { payload }) => {
      payload.profitType === "total"
        ? (state.totalProfit = payload.income)
        : payload.profitType === "month"
        ? (state.totalMonthlyProfit = payload.income)
        : payload.profitType === "daily"
        ? (state.totalDailyProfit = payload.income)
        : null;

    },
    setIncome: (state, { payload }) => {
      payload.incomeType === "total"
        ? (state.income = payload?.labels[0]?.map(() =>
            faker.datatype.number({ min: 10, max: 58 })
          ))
        : payload.incomeType === "month"
        ? (state.monthlyIncome = payload?.labels[0]?.map(() =>
            faker.datatype.number({ min: 10, max: 58 })
          ))
        : payload.incomeType === "daily"
        ? (state.dailyIncome = payload?.labels[0]?.map(() =>
            faker.datatype.number({ min: 10, max: 58 })
          ))
        : payload.incomeType === "cash"
        ? (state.cash = payload?.labels[0]?.map(() =>
            faker.datatype.number({ min: 10, max: 58 })
          ))
        : null;
    },
    setExpense: (state, { payload }) => {
      payload.expenseType === "total"
        ? (state.expense = payload?.labels[0]?.map(() =>
            faker.datatype.number({ min: 10, max: 58 })
          ))
        : payload.expenseType === "month"
        ? (state.monthlyExpense = payload?.labels[0]?.map(() =>
            faker.datatype.number({ min: 10, max: 58 })
          ))
        : payload.expenseType === "daily"
        ? (state.dailyExpense = payload?.labels[0]?.map(() =>
            faker.datatype.number({ min: 10, max: 58 })
          ))
        : payload.expenseType === "wallet"
        ? (state.wallet = payload?.labels[0]?.map(() =>
            faker.datatype.number({ min: 10, max: 58 })
          ))
        : null;
    },
  },
});

export const {
  setLogin,
  setCategoryList,
  setExpense,
  setIncome,
  setTotalProfit,
  setProductList,
  monthlyIncome,
  dailyIncome,
  monthlyExpense,
  dailyExpense,
  payMethod,
  income,
  expense,
  cash,
  wallet,
  totalProfit,
  totalDailyProfit,
  totalMonthlyProfit
} = authSlice.actions;
export default authSlice.reducer;
