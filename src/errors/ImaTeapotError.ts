import { HttpError } from "./HttpError";

export class ImaTeapotError<ContextType> extends HttpError<ContextType> {
  constructor(
    public readonly message: string = "I'm a Teapot",
    public readonly context?: ContextType
  ) {
    super(418, message, context);
  }
}
