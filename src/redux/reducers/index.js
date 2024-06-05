import { combineReducers } from 'redux';
import categories from './categories';
import products from './products';
import cart from './cart';

const rootReducer = combineReducers({
  categories,
  products,
  cart,
});

export default rootReducer;
