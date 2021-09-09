import { HttpError } from "./HttpError";

export class URITooLongError<ContextType> extends HttpError<ContextType> {
  constructor(
    public readonly message: string = "URI Too Long",
    public readonly context?: ContextType
  ) {
    super(414, message, context);
  }
}
