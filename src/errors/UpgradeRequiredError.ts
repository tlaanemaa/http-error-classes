import { HttpError } from "./HttpError";

export class UpgradeRequiredError<ContextType> extends HttpError<ContextType> {
  public readonly name = "UpgradeRequiredError";

  constructor(
    public readonly message: string = "Upgrade Required",
    public readonly context?: ContextType
  ) {
    super(426, message, context);
  }
}
