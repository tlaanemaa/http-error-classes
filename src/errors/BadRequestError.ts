import { HttpError } from "./HttpError";

export class BadRequestError<ContextType> extends HttpError<ContextType> {
  constructor(
    public readonly message: string = "Bad Request",
    public readonly context?: ContextType
  ) {
    super(400, message, context);
  }
}
