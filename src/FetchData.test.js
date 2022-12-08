import { FetchData } from "./FetchData";
import { render, screen } from "@testing-library/react";

test("render FetchData", async () => {
  render(<FetchData />);
  await screen.findByText(/Tālofa/i);
  const linkElement = screen.getByText(/Tālofa/i);
  expect(linkElement).toBeInTheDocument();
});
