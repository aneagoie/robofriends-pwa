import { shallow, mount, render } from "enzyme";
import React from "react";
import Card from "../Card";

test("Should render Card component", () => {
  expect(shallow(<Card />)).toMatchSnapshot();
});
