import { rest } from "msw";

export const handlers = [
  // Handles a POST request
  /*rest.post("https://fancy-app.com/postToThisEndpoint", (req, res, ctx) => {
    return res(
      // Respond with a 200 status code
      ctx.status(200)
    );
  }),*/

  // Handles a GET request
  rest.get("https://www.greetingsapi.com/random", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        type: "hello",
        greeting: "Tālofa",
        locale: "New Zealand",
        language: "Samoan",
      })
    );
  }),
];
