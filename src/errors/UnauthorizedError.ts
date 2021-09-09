import { HttpError } from "./HttpError";

export class UnauthorizedError<ContextType> extends HttpError<ContextType> {
  constructor(
    public readonly message: string = "Unauthorized",
    public readonly context?: ContextType
  ) {
    super(401, message, context);
  }
}
