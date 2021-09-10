import { HttpError } from "./HttpError";

export class PreconditionFailedError<ContextType> extends HttpError<ContextType> {
  public readonly name = "PreconditionFailedError";

  constructor(
    public readonly message: string = "Precondition Failed",
    public readonly context?: ContextType
  ) {
    super(412, message, context);
  }
}
