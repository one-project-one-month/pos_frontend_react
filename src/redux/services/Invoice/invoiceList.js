import { createSlice } from '@reduxjs/toolkit';

// Initial state for date
const initialDateState = {
  date : {
    startDate: new Date('January 1, 2024 00:00:00').toISOString(),
    endDate: new Date().toISOString(),
    key: 'selection'
  },
  click : false
 };

 const dateSlice = createSlice({
    name: 'date',
    initialState: initialDateState.date,
    reducers: {
      setDate(state, action) {
        return action.payload;
      }
    }
  });
  
  const clickSlice = createSlice({
    name: 'click',
    initialState: initialDateState.click,
    reducers: {
      setClick(state, action) {
        return action.payload;
      }
    }
  });
  
  export const { setDate } = dateSlice.actions;
  export const { setClick } = clickSlice.actions;
  
  export const dateReducer = dateSlice.reducer;
  export const clickReducer = clickSlice.reducer;