import { HttpError } from "./HttpError";

export class RequestTimeoutError<ContextType> extends HttpError<ContextType> {
  public readonly name = "RequestTimeoutError";

  constructor(
    public readonly message: string = "Request Timeout",
    public readonly context?: ContextType
  ) {
    super(408, message, context);
  }
}
