import { HttpError } from "./HttpError";

export class BandwidthLimitExceededError<ContextType> extends HttpError<ContextType> {
  public readonly name = "BandwidthLimitExceededError";

  constructor(
    public readonly message: string = "Bandwidth Limit Exceeded",
    public readonly context?: ContextType
  ) {
    super(509, message, context);
  }
}
