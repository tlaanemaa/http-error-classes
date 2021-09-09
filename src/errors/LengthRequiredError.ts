import { HttpError } from "./HttpError";

export class LengthRequiredError<ContextType> extends HttpError<ContextType> {
  constructor(
    public readonly message: string = "Length Required",
    public readonly context?: ContextType
  ) {
    super(411, message, context);
  }
}
