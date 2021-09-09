import { HttpError } from "./HttpError";

export class ForbiddenError<ContextType> extends HttpError<ContextType> {
  constructor(
    public readonly message: string = "Forbidden",
    public readonly context?: ContextType
  ) {
    super(403, message, context);
  }
}
