import { shallow } from "enzyme";
import React from "react";
import CounterButton from "../CounterButton";

test("Should render CounterButton component", () => {
  const mockColor = "red";
  expect(
    shallow(<CounterButton id={"counter"} color={mockColor} />)
  ).toMatchSnapshot();
});

test("correctly increments the counter", () => {
  const mockColor = "red";
  const mockButton = shallow(<CounterButton color={mockColor} />);

  mockButton.find('[id="counter"]').simulate("click");
  expect(mockButton.state()).toEqual({ count: 1 });
});
