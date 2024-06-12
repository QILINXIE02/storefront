const initialState = {
  list: [
    { name: 'electronics', displayName: 'Electronics', description: 'Devices and gadgets' },
    { name: 'clothing', displayName: 'Clothing', description: 'Apparel and accessories' },
  ],
  activeCategory: '',
};

export const selectCategory = (category) => ({
  type: 'SELECT_CATEGORY',
  payload: category,
});

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SELECT_CATEGORY':
      return { ...state, activeCategory: action.payload };
    default:
      return state;
  }
};

export default categoriesReducer;
