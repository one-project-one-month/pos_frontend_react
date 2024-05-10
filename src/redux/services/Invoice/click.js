import { createSlice } from '@reduxjs/toolkit';

const initialClickState = false;

const clickSlice = createSlice({
  name: 'click',
  initialState: initialClickState,
  reducers: {
    setClick(state, action) {
      return action.payload;
    }
  }
});

export const { setClick } = clickSlice.actions;
export default clickSlice.reducer;