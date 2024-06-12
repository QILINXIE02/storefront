import React from 'react';
import { render } from '@testing-library/react';
import Footer from './index';

test('renders footer without crashing', () => {
  render(<Footer />);
});
