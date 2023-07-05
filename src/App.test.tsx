import React from "react";
import { render, screen } from "@testing-library/react";
import { App } from "./App";

test("renders App compoenent with child component", () => {
  render(<App />);

  const root = screen.getByTitle("parent-div");

  const parent = screen.getByTestId("parent");
  const child = screen.getByTestId("card");
  const childTable = screen.getByTestId("grid");

  expect(root).toContainElement(root);

  expect(parent).toContainElement(child);
  expect(parent).toContainElement(childTable);

  expect(child).not.toContainElement(parent);
});
