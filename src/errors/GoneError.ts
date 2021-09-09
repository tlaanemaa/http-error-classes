import { HttpError } from "./HttpError";

export class GoneError<ContextType> extends HttpError<ContextType> {
  constructor(
    public readonly message: string = "Gone",
    public readonly context?: ContextType
  ) {
    super(410, message, context);
  }
}
