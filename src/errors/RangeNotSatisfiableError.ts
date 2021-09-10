import { HttpError } from "./HttpError";

export class RangeNotSatisfiableError<ContextType> extends HttpError<ContextType> {
  public readonly name = "RangeNotSatisfiableError";

  constructor(
    public readonly message: string = "Range Not Satisfiable",
    public readonly context?: ContextType
  ) {
    super(416, message, context);
  }
}
