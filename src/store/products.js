const initialState = [
  { name: 'Laptop', category: 'electronics', description: 'A powerful laptop', price: 1000, inventory: 10 },
  { name: 'Shirt', category: 'clothing', description: 'A stylish shirt', price: 50, inventory: 100 },
];

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SELECT_CATEGORY':
      return state.filter(product => product.category === action.payload);
    default:
      return state;
  }
};

export default productsReducer;
