import { HttpError } from "./HttpError";

export class ConflictError<ContextType> extends HttpError<ContextType> {
  constructor(
    public readonly message: string = "Conflict",
    public readonly context?: ContextType
  ) {
    super(409, message, context);
  }
}
