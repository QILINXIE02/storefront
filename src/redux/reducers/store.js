import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from './categories';
import productReducer from './products';

const store = configureStore({
  reducer: {
    categories: categoryReducer,
    products: productReducer,
  },
});

export default store;
