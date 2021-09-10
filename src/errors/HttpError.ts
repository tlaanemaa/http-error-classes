export class HttpError<ContextType> extends Error {
  public readonly name: string = "HttpError";
  public readonly statusCode: number;

  constructor(
    public readonly status: number,
    public readonly message: string,
    public readonly context?: ContextType
  ) {
    super(message);
    this.statusCode = status;
  }
}
