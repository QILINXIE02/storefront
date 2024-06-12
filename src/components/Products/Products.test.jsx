import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Products from './index';
import rootReducer from '../../store';

test('renders products without crashing', () => {
  const store = createStore(rootReducer);
  render(
    <Provider store={store}>
      <Products />
    </Provider>
  );
});
