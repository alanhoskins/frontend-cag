import React from 'react';
import { render } from '@testing-library/react';
import App from '../pages/App';

test('renders learn react link', () => {
  const { getAllByText } = render(<App />);
  const linkElement = getAllByText(/CHICAGO ARTIST GUIDE/i);
  expect(linkElement).toHaveLength(5);
});
