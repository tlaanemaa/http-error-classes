import { HttpError } from "./HttpError";

export class TooEarlyError<ContextType> extends HttpError<ContextType> {
  public readonly name = "TooEarlyError";

  constructor(
    public readonly message: string = "Too Early",
    public readonly context?: ContextType
  ) {
    super(425, message, context);
  }
}
