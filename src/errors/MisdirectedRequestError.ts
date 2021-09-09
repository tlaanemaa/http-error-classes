import { HttpError } from "./HttpError";

export class MisdirectedRequestError<
  ContextType
> extends HttpError<ContextType> {
  constructor(
    public readonly message: string = "Misdirected Request",
    public readonly context?: ContextType
  ) {
    super(421, message, context);
  }
}
