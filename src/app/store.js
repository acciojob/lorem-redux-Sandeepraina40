import { configureStore } from '@reduxjs/toolkit';
import loremReducer from '../components/loremSlice';

export const store = configureStore({
  reducer: {
    lorem: loremReducer
  }
});
