import React from "react";
import { cleanup, fireEvent, render, RenderResult } from "@testing-library/react";
import { Button } from "./Button";

describe("Simple Button Component", () => {
  let mockFn: jest.Mock;
  let element: RenderResult;
  beforeEach(() => {
    mockFn = jest.fn();
    element = render(<Button onClick={mockFn}>TextButton</Button>);
  });

  afterEach(() => {
    cleanup();
  });

  it("Button is rendered on screen", () => {
    const button = element.queryByRole("button")!;
    expect(button).not.toBeNull();
  });

  it("Button click event works", () => {
    const button = element.queryByRole("button")!;
    expect(mockFn.mock.calls.length).toBe(0);
    fireEvent.click(button);
    expect(mockFn.mock.calls.length).toBe(1);
  });
});
