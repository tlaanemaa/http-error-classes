import { HttpError } from "./HttpError";

export class InsufficientStorageError<ContextType> extends HttpError<ContextType> {
  public readonly name = "InsufficientStorageError";

  constructor(
    public readonly message: string = "Insufficient Storage",
    public readonly context?: ContextType
  ) {
    super(507, message, context);
  }
}
