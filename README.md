# HTTP error classes

This package provides error classes for every HTTP 4xx and 5xx error code. This makes it easy to throw HTTP errors in your application without having to build the classes yourself for that, just a small win.

You can also check if an error is a HttpError by checking if it's an instance of the `HttpError` class from this package, all errors here extend that class.

The error classes allow you to provide a message and a context object, status codes are built into the errors. You can also just use the `HttpError` class to provide your own status code.

## Example

### Throwing an error with some context

Here we have a function to calculate the Fibonacci value at `n` steps. If the `n` we receive is not a number then we'll throw a `BadRequestError` and give the `n` we received as context.

```js
const { BadRequestError } = require("http-error-classes");

const fibonacci = (n) => {
  if (typeof n !== "number") {
    throw new BadRequestError("n must be a number!", { n });
  }
  // Calculate fibonacci
};
```

### Filtering for HttpErrors

Here we have an express error middleware that handles how errors get returned to the client. We don't want to expose errors that are not HttpErrors, so we mask them with a generic `InternalServerError`. It's also important to explicitly map the error to the returned object because HttpErrors, like regular Errors, contain the stack trace which should not be exposed.

```js
const { HttpError, InternalServerError } = require("http-error-classes");

const errorHandlerMiddleware = (err, req, res, next) => {
  const error = err instanceof HttpError ? err : new InternalServerError();
  res.status(error.status).send({
    message: error.message,
    context: error.context,
  });
};
```

## API

### `HttpError`

```ts
declare class HttpError<ContextType> extends Error {
  readonly status: number;
  readonly message: string;
  readonly context?: ContextType | undefined;
  readonly name: string;
  readonly statusCode: number;

  constructor(
    status: number,
    message: string,
    context?: ContextType | undefined = undefined
  );
}
```

### Any other error, for example `BadRequestError`

```ts
declare class BadRequestError<ContextType> extends HttpError<ContextType> {
  readonly message: string;
  readonly context?: ContextType | undefined;
  readonly name = "BadRequestError";

  constructor(
    message?: string = "Bad Request",
    context?: ContextType | undefined = undefined
  );
}
```
