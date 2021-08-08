import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders text from shared component package', () => {
  const { getByText } = render(<App />);
  expect(getByText(/Shared Button/i)).toBeInTheDocument();
});
