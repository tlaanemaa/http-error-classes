import { HttpError } from "./HttpError";

export class PaymentRequiredError<ContextType> extends HttpError<ContextType> {
  public readonly name = "PaymentRequiredError";

  constructor(
    public readonly message: string = "Payment Required",
    public readonly context?: ContextType
  ) {
    super(402, message, context);
  }
}
