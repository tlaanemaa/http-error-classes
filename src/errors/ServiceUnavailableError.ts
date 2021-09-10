import { HttpError } from "./HttpError";

export class ServiceUnavailableError<ContextType> extends HttpError<ContextType> {
  public readonly name = "ServiceUnavailableError";

  constructor(
    public readonly message: string = "Service Unavailable",
    public readonly context?: ContextType
  ) {
    super(503, message, context);
  }
}
