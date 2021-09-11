import { HttpError } from "./HttpError";

export class InternalServerError<ContextType> extends HttpError<ContextType> {
  public readonly name = "InternalServerError";

  constructor(
    public readonly message: string = "Internal Server Error",
    public readonly context?: ContextType
  ) {
    super(500, message, context);
  }
}
