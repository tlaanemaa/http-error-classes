import { HttpError } from "./HttpError";

describe("HttpError", () => {
  it("should construct to an error object", () => {
    const httpError = new HttpError(500, "Stuff broke");
    expect(httpError).toBeInstanceOf(Error);
  });
});
