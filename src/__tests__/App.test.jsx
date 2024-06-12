import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from '../App';
import rootReducer from '../store';

test('renders app without crashing', () => {
  const store = createStore(rootReducer);
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
});
