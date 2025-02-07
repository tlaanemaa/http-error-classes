import { HttpError } from "./HttpError";

export class ExpectationFailedError<ContextType> extends HttpError<ContextType> {
  public readonly name = "ExpectationFailedError";

  constructor(
    public readonly message: string = "Expectation Failed",
    public readonly context?: ContextType
  ) {
    super(417, message, context);
  }
}
