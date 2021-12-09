import { render } from "@testing-library/react";
import App from "../index";

it("renders App component", () => {
  const { getByText } = render(<App />);

  expect(getByText(/Login/i)).toBeInTheDocument();
});
