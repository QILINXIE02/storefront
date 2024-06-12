import categoriesReducer, { selectCategory } from './index';

test('should return the initial state', () => {
  expect(categoriesReducer(undefined, {})).toEqual({
    list: [
      { name: 'electronics', displayName: 'Electronics', description: 'Devices and gadgets' },
      { name: 'clothing', displayName: 'Clothing', description: 'Apparel and accessories' },
    ],
    activeCategory: '',
  });
});

test('should handle a category being selected', () => {
  const previousState = {
    list: [
      { name: 'electronics', displayName: 'Electronics', description: 'Devices and gadgets' },
      { name: 'clothing', displayName: 'Clothing', description: 'Apparel and accessories' },
    ],
    activeCategory: '',
  };
  expect(categoriesReducer(previousState, selectCategory('electronics'))).toEqual({
    list: [
      { name: 'electronics', displayName: 'Electronics', description: 'Devices and gadgets' },
      { name: 'clothing', displayName: 'Clothing', description: 'Apparel and accessories' },
    ],
    activeCategory: 'electronics',
  });
});
