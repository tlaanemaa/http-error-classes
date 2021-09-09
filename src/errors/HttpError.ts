export class HttpError<ContextType = unknown> extends Error {
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
