import { HttpError } from "./HttpError";

export class UnsupportedMediaTypeError<
  ContextType
> extends HttpError<ContextType> {
  constructor(
    public readonly message: string = "Unsupported Media Type",
    public readonly context?: ContextType
  ) {
    super(415, message, context);
  }
}
