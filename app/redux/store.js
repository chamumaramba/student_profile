// redux/store.js
'use client';
import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './slices/loginSlice';
import studentProfileActionsReducer from './slices/studentProfileActionSlice';

export const store = configureStore({
  reducer: {
    login: loginReducer,
    studentProfileActions: studentProfileActionsReducer,
  },
});
