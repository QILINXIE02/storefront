const initialState = {
  list: [
    { name: 'electronics', displayName: 'Electronics', description: 'Various electronic items' },
    { name: 'clothing', displayName: 'Clothing', description: 'Fashion and apparel' },
  ],
  active: '',
};

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_CATEGORY':
      return {
        ...state,
        active: action.payload,
      };
    default:
      return state;
  }
};

export default categoriesReducer;
