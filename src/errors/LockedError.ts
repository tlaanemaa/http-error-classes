import { HttpError } from "./HttpError";

export class LockedError<ContextType> extends HttpError<ContextType> {
  constructor(
    public readonly message: string = "Locked",
    public readonly context?: ContextType
  ) {
    super(423, message, context);
  }
}
