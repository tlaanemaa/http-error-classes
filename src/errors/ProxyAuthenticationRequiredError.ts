import { HttpError } from "./HttpError";

export class ProxyAuthenticationRequiredError<ContextType> extends HttpError<ContextType> {
  public readonly name = "ProxyAuthenticationRequiredError";

  constructor(
    public readonly message: string = "Proxy Authentication Required",
    public readonly context?: ContextType
  ) {
    super(407, message, context);
  }
}
