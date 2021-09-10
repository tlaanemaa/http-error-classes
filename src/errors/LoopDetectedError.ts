import { HttpError } from "./HttpError";

export class LoopDetectedError<ContextType> extends HttpError<ContextType> {
  public readonly name = "LoopDetectedError";

  constructor(
    public readonly message: string = "Loop Detected",
    public readonly context?: ContextType
  ) {
    super(508, message, context);
  }
}
