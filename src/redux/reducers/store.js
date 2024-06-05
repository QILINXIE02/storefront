import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from './categories';
import productReducer from './products';
import cartReducer from './cart'; // Assuming you have a cart reducer

const store = configureStore({
  reducer: {
    categories: categoryReducer,
    products: productReducer,
    cart: cartReducer, // Add your cart reducer here
  },
});

export default store;
