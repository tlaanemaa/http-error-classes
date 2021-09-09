import { HttpError } from "./HttpError";

export class NotExtendedError<ContextType> extends HttpError<ContextType> {
  constructor(
    public readonly message: string = "Not Extended",
    public readonly context?: ContextType
  ) {
    super(510, message, context);
  }
}
