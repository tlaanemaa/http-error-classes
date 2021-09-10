import { BadRequestError } from "./BadRequestError";

/**
 * We'll just be testing one specific HttpError here because
 * they're all created in the exact same way so the tests would be exactly the same.
 * This just gives us confidence that the extension works
 */
describe("BadRequestError", () => {
  describe("when constructed", () => {
    const contextData = { data: "just bad" };
    const badRequestError = new BadRequestError(
      "This request is bad",
      contextData
    );

    it("should return an error object", () => {
      expect(badRequestError).toBeInstanceOf(Error);
    });

    it("should contain the status", () => {
      expect(badRequestError.status).toBe(400);
    });

    it("should contain the statusCode", () => {
      expect(badRequestError.statusCode).toBe(400);
    });

    it("should contain the message", () => {
      expect(badRequestError.message).toBe("This request is bad");
    });

    it("should contain the context", () => {
      expect(badRequestError.context).toBe(contextData);
    });

    it("should be named HttpError", () => {
      expect(badRequestError.name).toBe("BadRequestError");
    });

    it("should contain the stack", () => {
      expect(badRequestError.stack).toContain("Error: This request is bad");
    });
  });
});
