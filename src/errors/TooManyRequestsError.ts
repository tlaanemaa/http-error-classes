import { HttpError } from "./HttpError";

export class TooManyRequestsError<ContextType> extends HttpError<ContextType> {
  public readonly name = "TooManyRequestsError";

  constructor(
    public readonly message: string = "Too Many Requests",
    public readonly context?: ContextType
  ) {
    super(429, message, context);
  }
}
