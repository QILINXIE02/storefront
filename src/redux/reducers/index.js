import { combineReducers } from 'redux';
import categoriesReducer from './categories'; // Corrected import
import productsReducer from './products'; // Corrected import
import cartReducer from './cart'; // Corrected import

const rootReducer = combineReducers({
  categories: categoriesReducer, // Corrected naming
  products: productsReducer, // Corrected naming
  cart: cartReducer,
});

export default rootReducer;
