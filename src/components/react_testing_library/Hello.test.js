import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Hello from './Hello';

test('renders the correct greeting', () => {
  render(<Hello name="World" />);
  // Look for the text "Hello, World!" in the document
  const greeting = screen.getByRole('heading', { name: /Hello, World!/i });

  expect(greeting).toBeInTheDocument();
});