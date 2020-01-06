import React from "react";
import { render } from "@testing-library/react";
import Users from "./Users";

it("has a Users component", () => {
  const { getByText } = render(<Users />);
  expect(getByText("Users")).toBeInTheDocument();
});
