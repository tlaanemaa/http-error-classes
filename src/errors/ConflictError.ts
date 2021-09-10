import { HttpError } from "./HttpError";

export class ConflictError<ContextType> extends HttpError<ContextType> {
  public readonly name = "ConflictError";

  constructor(
    public readonly message: string = "Conflict",
    public readonly context?: ContextType
  ) {
    super(409, message, context);
  }
}
