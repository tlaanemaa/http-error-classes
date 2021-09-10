import { HttpError } from "./HttpError";

export class FailedDependencyError<ContextType> extends HttpError<ContextType> {
  public readonly name = "FailedDependencyError";

  constructor(
    public readonly message: string = "Failed Dependency",
    public readonly context?: ContextType
  ) {
    super(424, message, context);
  }
}
