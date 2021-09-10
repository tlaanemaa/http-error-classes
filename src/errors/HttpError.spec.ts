import { HttpError } from "./HttpError";

describe("HttpError", () => {
  describe("when constructed", () => {
    const contextData = { a: 1 };
    const httpError = new HttpError(500, "Stuff broke", contextData);

    it("should return an error object", () => {
      expect(httpError).toBeInstanceOf(Error);
    });

    it("should contain the status", () => {
      expect(httpError.status).toBe(500);
    });

    it("should contain the statusCode", () => {
      expect(httpError.statusCode).toBe(500);
    });

    it("should contain the message", () => {
      expect(httpError.message).toBe("Stuff broke");
    });

    it("should contain the context", () => {
      expect(httpError.context).toBe(contextData);
    });

    it("should be named HttpError", () => {
      expect(httpError.name).toBe("HttpError");
    });

    it("should contain the stack", () => {
      expect(httpError.stack).toContain("Error: Stuff broke");
    });
  });
});
