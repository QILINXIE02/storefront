import React from 'react';
import { render } from '@testing-library/react';
import Header from './index';

test('renders header without crashing', () => {
  render(<Header />);
});
