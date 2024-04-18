// TableSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items : [
     

    ]
}

const tableSlice = createSlice({
    name : "TableSlice",
    initialState,
    reducers : {},
})

export const selectItems = state => state.TableSlice.items;

export const selectTotalAmount = state =>
state.TableSlice.items.reduce((total,item)=> total + item.qty * item.price,0)

export default tableSlice.reducer;
