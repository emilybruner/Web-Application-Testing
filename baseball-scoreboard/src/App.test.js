import React from 'react';
import { render } from '@testing-library/react';
import App from './App';


test('displays balls state component', () => {
  const { getByText } = render(<App />);
  getByText(/balls/i);
});

test('displays strike state component', () => {
  const { getByText } = render(<App />);
  getByText(/strikes/i);
});

test('renders without crashing', () => {
  render(<App />);
});