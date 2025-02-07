import { HttpError } from "./HttpError";

export class UnprocessableEntityError<ContextType> extends HttpError<ContextType> {
  public readonly name = "UnprocessableEntityError";

  constructor(
    public readonly message: string = "Unprocessable Entity",
    public readonly context?: ContextType
  ) {
    super(422, message, context);
  }
}
