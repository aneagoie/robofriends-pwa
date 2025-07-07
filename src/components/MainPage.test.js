import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import MainPage from "./MainPage";
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { filterRobots } from './utility_functions/filterRobots';

let wrapper;

const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [{
        id: 3,
        name: 'John',
        email: 'john@gmail.com'
    }],
    searchField: '',
    isPending: false,
};
beforeEach(() => {
    wrapper = render(<MainPage {...mockProps} />);
});

it("renders the MainPage component without crashing", () => {
    const { asFragment } = wrapper;
    expect(asFragment()).toMatchSnapshot();
})

it('filters robots correctly', () => {
 expect(filterRobots(mockProps.robots, '')).toEqual([{
    id: 3,
    name: 'John',
    email: 'john@gmail.com'
}]);
})