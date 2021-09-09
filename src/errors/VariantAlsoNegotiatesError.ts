import { HttpError } from "./HttpError";

export class VariantAlsoNegotiatesError<
  ContextType
> extends HttpError<ContextType> {
  constructor(
    public readonly message: string = "Variant Also Negotiates",
    public readonly context?: ContextType
  ) {
    super(506, message, context);
  }
}
