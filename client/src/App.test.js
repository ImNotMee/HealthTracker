import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders login button', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText('login');
  expect(linkElement).toBeInTheDocument();
});
