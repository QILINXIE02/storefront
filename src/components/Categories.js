import { SET_ACTIVE_CATEGORY } from '../redux/actions';

const initialState = {
  list: [
    { name: 'electronics', displayName: 'Electronics', description: 'Gadgets and devices' },
    { name: 'clothing', displayName: 'Clothing', description: 'Apparel and accessories' },
    { name: 'food', displayName: 'Food', description: 'Groceries and beverages' },
  ],
  active: '',
};

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_CATEGORY:
      return {
        ...state,
        active: action.payload.name,
      };
    default:
      return state;
  }
};

export default categoriesReducer;
