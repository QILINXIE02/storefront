import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from './Categories';

const store = configureStore({
  reducer: {
    categories: categoriesReducer,
  },
});

export default store;
