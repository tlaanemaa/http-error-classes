import { HttpError } from "./HttpError";

export class LoopDetectedError<ContextType> extends HttpError<ContextType> {
  constructor(
    public readonly message: string = "Loop Detected",
    public readonly context?: ContextType
  ) {
    super(508, message, context);
  }
}
