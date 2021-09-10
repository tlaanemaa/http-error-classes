import { HttpError } from "./HttpError";

export class UnauthorizedError<ContextType> extends HttpError<ContextType> {
  public readonly name = "UnauthorizedError";

  constructor(
    public readonly message: string = "Unauthorized",
    public readonly context?: ContextType
  ) {
    super(401, message, context);
  }
}
