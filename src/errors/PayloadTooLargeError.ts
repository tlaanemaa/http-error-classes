import { HttpError } from "./HttpError";

export class PayloadTooLargeError<ContextType> extends HttpError<ContextType> {
  public readonly name = "PayloadTooLargeError";

  constructor(
    public readonly message: string = "Payload Too Large",
    public readonly context?: ContextType
  ) {
    super(413, message, context);
  }
}
