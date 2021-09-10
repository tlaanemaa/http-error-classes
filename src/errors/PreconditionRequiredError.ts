import { HttpError } from "./HttpError";

export class PreconditionRequiredError<ContextType> extends HttpError<ContextType> {
  public readonly name = "PreconditionRequiredError";

  constructor(
    public readonly message: string = "Precondition Required",
    public readonly context?: ContextType
  ) {
    super(428, message, context);
  }
}
