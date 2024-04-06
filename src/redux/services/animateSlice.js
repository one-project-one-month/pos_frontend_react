import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
  blur: false,
  noti: false,
  account: false,
  menu: false,
  messenger: false,
  width: null,
  height: null,
  menuItemArrow: false,
};

const STORAGE_KEY = "Animate";

//____________________________________________________storedItems_____________________Null_____//
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
    menuItemArrowOn: (state, { payload }) => {
      state.menuItemArrow = payload.menuItemArrow;
    },
    accountSettingOn: (state, { payload }) => {
      state.account = payload.account;
      state.noti = false;
      state.messenger = false;
      state.menu = false;
    },
    notiOn: (state, { payload }) => {
      state.account = false;
      state.noti = payload.noti;
      state.messenger = false;
      state.menu = false;
    },
    messengerOn: (state, { payload }) => {
      state.messenger = payload.messenger;

      state.account = false;
      state.noti = false;
      state.menu = false;
    },
    menuOn: (state, { payload }) => {
      state.menu = payload.menu;

      state.account = false;
      state.noti = false;
      state.messenger = false;
    },
    setArea: (state, { payload }) => {
      state.width = payload.width;
      state.height = payload.height;
    },
  },
});

export const {
  blurOn,
  accountSettingOn,
  notiOn,
  messengerOn,
  menuOn,
  setArea,
  menuItemArrowOn,
} = animateSlice.actions;
export default animateSlice.reducer;
