import React from "react";
import { render, fireEvent, waitForElement } from "@testing-library/react";
import axiosMock from "axios";
import "@testing-library/jest-dom/extend-expect";

import CreateUser from "../components/CreateUser";

jest.mock("axios");

test("Form submits", async () => {
  const { getByTestId } = render(<CreateUser />);
  const userInput = getByTestId("user-input");
  const url = "/add";

  axiosMock.post(url, { username: "Test" });

  expect(axiosMock.post).toHaveBeenCalledTimes(1);
  expect(axiosMock.post).toHaveBeenCalledWith(url, { username: "Test" });
  expect(userInput).toHaveTextContent("");
});
