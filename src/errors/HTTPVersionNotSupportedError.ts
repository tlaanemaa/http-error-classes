import { HttpError } from "./HttpError";

export class HTTPVersionNotSupportedError<
  ContextType
> extends HttpError<ContextType> {
  constructor(
    public readonly message: string = "HTTP Version Not Supported",
    public readonly context?: ContextType
  ) {
    super(505, message, context);
  }
}
