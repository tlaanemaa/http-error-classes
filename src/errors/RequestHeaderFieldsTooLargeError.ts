import { HttpError } from "./HttpError";

export class RequestHeaderFieldsTooLargeError<ContextType> extends HttpError<ContextType> {
  public readonly name = "RequestHeaderFieldsTooLargeError";

  constructor(
    public readonly message: string = "Request Header Fields Too Large",
    public readonly context?: ContextType
  ) {
    super(431, message, context);
  }
}
