// redux/slices/loginSlice.js
'use client';
import { createSlice } from '@reduxjs/toolkit';

export const loginSlice = createSlice({
  name: 'login',
  initialState: {
    id: null,
  },
  reducers: {
    setLogin: (state, action) => {
      state.id = action.payload.id;
    },
  },
});

export const { setLogin } = loginSlice.actions;
export default loginSlice.reducer;
