import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CounterButton from "./CounterButton"
import userEvent from '@testing-library/user-event';

it('renders the CounterButton component correctly', () => {
    const mockColor = 'red'
    const { asFragment } = render(<CounterButton  color={mockColor} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("correctly increments the counter", async() => {
    const mockColor = 'red'
    render(<CounterButton color={mockColor} />);
    const counterButton = screen.getByTestId('counter');
    expect(counterButton).toBeInTheDocument();
    await userEvent.click(counterButton);
    await userEvent.click(counterButton);
    expect(counterButton.textContent).toBe('Count: 3'); // because initial count is 1
    // Simulate a generic keyboard event (e.g., pressing the "a" key)
    await userEvent.keyboard('a');
    // The counter should remain the same if the CounterButton does not handle keyboard events
    expect(counterButton.textContent).toBe('Count: 3');
    // Instead of checking the prop, check the rendered button's style
    expect(counterButton).toHaveAttribute('color', mockColor);
  });
