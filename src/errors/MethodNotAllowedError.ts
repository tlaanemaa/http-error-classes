import { HttpError } from "./HttpError";

export class MethodNotAllowedError<ContextType> extends HttpError<ContextType> {
  public readonly name = "MethodNotAllowedError";

  constructor(
    public readonly message: string = "Method Not Allowed",
    public readonly context?: ContextType
  ) {
    super(405, message, context);
  }
}
