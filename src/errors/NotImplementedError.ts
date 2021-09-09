import { HttpError } from "./HttpError";

export class NotImplementedError<ContextType> extends HttpError<ContextType> {
  constructor(
    public readonly message: string = "Not Implemented",
    public readonly context?: ContextType
  ) {
    super(501, message, context);
  }
}
