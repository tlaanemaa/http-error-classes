import { HttpError } from "./HttpError";

export class BadGatewayError<ContextType> extends HttpError<ContextType> {
  constructor(
    public readonly message: string = "Bad Gateway",
    public readonly context?: ContextType
  ) {
    super(502, message, context);
  }
}
