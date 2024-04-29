import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "../api/AuthApi";
import authSlice from "./authSlice";
import  animateSlice  from "./animateSlice";
import { dataApi } from "../api/Data";
import newShopReducer from "./Shop/newshopsucces";
import productReducer from "./product/productAuth"; 


export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [authApi.reducerPath]: authApi.reducer,
    [dataApi.reducerPath]: dataApi.reducer,

    authSlice: authSlice,
    animateSlice: animateSlice,
    newShopReducer : newShopReducer,
    productSlice: productReducer, 

    
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      dataApi.middleware
    ),
});
