import { ADD_TO_CART } from './actionTypes'; // Import the ADD_TO_CART action type

// Example reducer
const cartReducer = (state = initialState, action) => {
  console.log('Action:', action); // Log the action being dispatched

  switch (action.type) {
    case ADD_TO_CART:
      // Your logic here
      console.log('New state:', newState); // Log the updated state
      return newState;
    default:
      return state;
  }
};

export default cartReducer;
