import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Categories from './index';
import rootReducer from '../../store';

test('renders categories and dispatches action on click', () => {
  const store = createStore(rootReducer);
  const { getByText } = render(
    <Provider store={store}>
      <Categories />
    </Provider>
  );

  fireEvent.click(getByText('Electronics'));
  expect(store.getState().categories.activeCategory).toBe('electronics');
});
