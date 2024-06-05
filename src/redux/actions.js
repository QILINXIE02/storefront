export const CHANGE_CATEGORY = 'CHANGE_CATEGORY';
export const ADD_TO_CART = 'ADD_TO_CART';

export const changeCategory = (category) => ({
  type: CHANGE_CATEGORY,
  payload: category,
});

export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product,
});
