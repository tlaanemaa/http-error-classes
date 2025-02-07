import { HttpError } from "./HttpError";

export class GatewayTimeoutError<ContextType> extends HttpError<ContextType> {
  public readonly name = "GatewayTimeoutError";

  constructor(
    public readonly message: string = "Gateway Timeout",
    public readonly context?: ContextType
  ) {
    super(504, message, context);
  }
}
