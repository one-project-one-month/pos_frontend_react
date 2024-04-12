import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../ProductsService/productSlice"; 
import animateReducer from "../ProductsService/animateSlice";

export const store = configureStore({
    reducer: {
        productSlice: productReducer, 
        animateSlice: animateReducer,
    },
});
