import { HttpError } from "./HttpError";

export class InternalServerErrorError<ContextType> extends HttpError<ContextType> {
  public readonly name = "InternalServerErrorError";

  constructor(
    public readonly message: string = "Internal Server Error",
    public readonly context?: ContextType
  ) {
    super(500, message, context);
  }
}
