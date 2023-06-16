import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

test("renders Able Typeahead", () => {
  render(<App />);
  const linkElement = screen.getByText(/Typeahead/i);
  expect(linkElement).toBeInTheDocument();
});

test.skip("user can type on search bar", () => {
  render(<App />);
  const textInput = screen.getByPlaceholderText(/Search/i);
  expect(textInput).toBeInTheDocument();
  let resultsList = screen.queryByTestId("results-list");
  expect(resultsList).not.toBeInTheDocument();
  userEvent.type(textInput, "Spiderman");
  resultsList = screen.queryByTestId("results-list");
  expect(resultsList).toBeInTheDocument();
  textInput.blur();
  expect(resultsList).not.toBeInTheDocument();
});
