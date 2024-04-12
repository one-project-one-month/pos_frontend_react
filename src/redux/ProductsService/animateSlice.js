import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
  blur: false,
  page: false,
  exportSet: false,
  addCat: false,
  addCatForm: false,
  width: null,
  height: null,
  menuItemArrow: false,
  pageNum:7,
  global:false
};

const STORAGE_KEY = "Animate";



const storedItems = Cookies.get(STORAGE_KEY)
  ? JSON.parse(Cookies.get(STORAGE_KEY))
  : null;

if (storedItems) {
  initialState.blur = storedItems;
}

export const animateSlice = createSlice({
  name: "animateSlice",
  initialState,
  reducers: {
    blurOn: (state, { payload }) => {
      state.blur = payload.blur;
    },
    setPageNum: (state, { payload }) => {
      state.pageNum = payload.pageNum;
    },
    menuItemArrowOn: (state, { payload }) => {
      state.menuItemArrow = payload.menuItemArrow;
    },
    exportSettingOn: (state, { payload }) => {
      state.exportSet = payload.exportSet;
      state.page = false;
      state.addCat = false;
      state.addCatForm = false;
    },
    GlobalOn: (state, { payload }) => {
      state.global = payload.global
      state.exportSet = false;
      state.page = false;
      state.addCat = false;
      state.addCatForm = false;
    },
    pageOn: (state, { payload }) => {
      state.exportSet = false;
      state.page = payload.page;
      state.addCat = false;
      state.addCatForm = false;
    },
    addCatOn: (state, { payload }) => {
      state.addCat = payload.addCatForm;

      state.exportSet = false;
      state.page = false;
      state.addCatForm = false;
    },
    addCatFormOn: (state, { payload }) => {
      state.addCatForm = payload.addCatForm;

      state.exportSet = false;
      state.page = false;
      state.addCat = false;
    },
    setArea: (state, { payload }) => {
      state.width = payload.width;
      state.height = payload.height;
    },
  },
});

export const {
  blurOn,
  exportSettingOn,
  pageOn,
  addCatOn,
  addCatFormOn,
  setArea,
  menuItemArrowOn,
  setPageNum,
  GlobalOn
} = animateSlice.actions;
export default animateSlice.reducer;
