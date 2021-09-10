import { HttpError } from "./HttpError";

export class GoneError<ContextType> extends HttpError<ContextType> {
  public readonly name = "GoneError";

  constructor(
    public readonly message: string = "Gone",
    public readonly context?: ContextType
  ) {
    super(410, message, context);
  }
}
