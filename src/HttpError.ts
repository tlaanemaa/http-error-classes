export class HttpError<ContextType> extends Error {
  constructor(
    public readonly status: number,
    public readonly message: string,
    public readonly context: ContextType
  ) {
    super(message);
  }

  public get statusCode(): number {
    return this.status;
  }
}
