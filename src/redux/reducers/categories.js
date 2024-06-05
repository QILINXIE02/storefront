import { CHANGE_CATEGORY } from './actionTypes';

const initialState = {
  list: [
    { name: 'Laptop', category: 'electronics', description: 'High performance laptop', price: 1000, inventory: 5 },
    { name: 'Shirt', category: 'clothing', description: 'Comfortable cotton shirt', price: 20, inventory: 15 },
  ],
  filtered: [],
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_CATEGORY:
      return {
        ...state,
        filtered: state.list.filter(product => product.category === action.payload),
      };
    default:
      return state;
  }
};

export default productsReducer;
