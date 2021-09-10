import { HttpError } from "./HttpError";

export class BadRequestError<ContextType> extends HttpError<ContextType> {
  public readonly name = "BadRequestError";

  constructor(
    public readonly message: string = "Bad Request",
    public readonly context?: ContextType
  ) {
    super(400, message, context);
  }
}
