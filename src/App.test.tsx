import React from "react";

import { screen } from "@testing-library/react";

import App from "./App";
import { render } from "./test-utils";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/home.demo.learn/i);
  expect(linkElement).toBeInTheDocument();
});
