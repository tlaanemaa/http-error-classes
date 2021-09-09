import { HttpError } from "./HttpError";

export class UnavailableForLegalReasonsError<
  ContextType
> extends HttpError<ContextType> {
  constructor(
    public readonly message: string = "Unavailable For Legal Reasons",
    public readonly context?: ContextType
  ) {
    super(451, message, context);
  }
}
