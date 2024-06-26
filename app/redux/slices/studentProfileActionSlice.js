// redux/slices/studentProfileActionsSlice.js
'use client';
import { createSlice } from '@reduxjs/toolkit';

export const studentProfileActionsSlice = createSlice({
  name: 'studentProfileActions',
  initialState: {
    action: null,
  },
  reducers: {
    setAction: (state, action) => {
      state.action = action.payload.action;
    },
  },
});

export const { setAction } = studentProfileActionsSlice.actions;
export default studentProfileActionsSlice.reducer;
