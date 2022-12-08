import { FetchData } from "./FetchData";
import { render, screen } from "@testing-library/react";
import { server } from "./mocs/server";
import { rest } from "msw";

test("render FetchData", async () => {
  render(<FetchData />);
  await screen.findByText(/Tālofa/i);
  expect(screen.getByText(/Tālofa/i)).toBeInTheDocument();
});

test("Not found", async () => {
  server.use(
    rest.get("https://www.greetingsapi.com/random", (req, res, ctx) => {
      return res(ctx.status(404));
    })
  );
  render(<FetchData />);
  await screen.findByText(/Not Found/i);
  expect(screen.getByText(/Not Found/i)).toBeInTheDocument();
});

test("Forbiden for you", async () => {
  server.use(
    rest.get("https://www.greetingsapi.com/random", (req, res, ctx) => {
      return res(ctx.status(403));
    })
  );
  render(<FetchData />);
  await screen.findByText(/Forbiden for you/i);
  expect(screen.getByText(/Forbiden for you/i)).toBeInTheDocument();
});
