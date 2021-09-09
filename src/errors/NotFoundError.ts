import { HttpError } from "./HttpError";

export class NotFoundError<ContextType> extends HttpError<ContextType> {
  constructor(
    public readonly message: string = "Not Found",
    public readonly context?: ContextType
  ) {
    super(404, message, context);
  }
}
