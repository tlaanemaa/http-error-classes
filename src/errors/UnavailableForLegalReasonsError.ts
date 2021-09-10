import { HttpError } from "./HttpError";

export class UnavailableForLegalReasonsError<ContextType> extends HttpError<ContextType> {
  public readonly name = "UnavailableForLegalReasonsError";

  constructor(
    public readonly message: string = "Unavailable For Legal Reasons",
    public readonly context?: ContextType
  ) {
    super(451, message, context);
  }
}
