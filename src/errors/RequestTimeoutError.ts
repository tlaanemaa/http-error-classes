import { HttpError } from "./HttpError";

export class RequestTimeoutError<ContextType> extends HttpError<ContextType> {
  constructor(
    public readonly message: string = "Request Timeout",
    public readonly context?: ContextType
  ) {
    super(408, message, context);
  }
}
