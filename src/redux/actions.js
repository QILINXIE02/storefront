export const SET_ACTIVE_CATEGORY = 'SET_ACTIVE_CATEGORY';

export const changeCategory = (category) => ({
  type: SET_ACTIVE_CATEGORY,
  payload: category,
});