import { HttpError } from "./HttpError";

export class MisdirectedRequestError<ContextType> extends HttpError<ContextType> {
  public readonly name = "MisdirectedRequestError";

  constructor(
    public readonly message: string = "Misdirected Request",
    public readonly context?: ContextType
  ) {
    super(421, message, context);
  }
}
