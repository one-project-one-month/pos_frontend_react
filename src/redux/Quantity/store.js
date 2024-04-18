// store.js
import { configureStore } from '@reduxjs/toolkit';
import tableReducer from './TableSlice'; 


export default configureStore({
  reducer: {
    TableSlice: tableReducer, 
  },
});
