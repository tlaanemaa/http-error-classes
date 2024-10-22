import { HttpError } from "./HttpError";

export class NetworkAuthenticationRequiredError<ContextType> extends HttpError<ContextType> {
  public readonly name = "NetworkAuthenticationRequiredError";

  constructor(
    public readonly message: string = "Network Authentication Required",
    public readonly context?: ContextType
  ) {
    super(511, message, context);
  }
}
