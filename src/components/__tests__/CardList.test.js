import { shallow, mount, render } from "enzyme";
import React from "react";
import CardList from "../CardList";

test("Should render CardList component", () => {
  const mockRobots = [
    {
      id: 1,
      name: "John Snow",
      email: "john@email.com",
    },
  ];
  expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot();
});
