import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CardList from "./CardList"

it('renders the CardList component correctly', () => {
    const mockRobots = [
        {
            id: 1,
            name: 'John Snow',
            username: 'john don',
            email: 'jhon@gmail.com'
        }
    ]
    const { asFragment } = render(<CardList robots={mockRobots}  />);
    expect(asFragment()).toMatchSnapshot();
  });