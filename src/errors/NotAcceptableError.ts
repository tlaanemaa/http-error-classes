import { HttpError } from "./HttpError";

export class NotAcceptableError<ContextType> extends HttpError<ContextType> {
  public readonly name = "NotAcceptableError";

  constructor(
    public readonly message: string = "Not Acceptable",
    public readonly context?: ContextType
  ) {
    super(406, message, context);
  }
}
