import { HttpError } from "./HttpError";

export class TooManyRequestsError<ContextType> extends HttpError<ContextType> {
  constructor(
    public readonly message: string = "Too Many Requests",
    public readonly context?: ContextType
  ) {
    super(429, message, context);
  }
}
