// A quick and dirty script to generate error classes for all different HTTP
// error codes

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { promises: fs } = require("fs");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const statusCodes = require("http").STATUS_CODES;

/**
 * We only want to generate errors for 4xx and 5xx codes
 */
const errorCodes = Object.entries(statusCodes).filter(([code]) =>
  ["4", "5"].includes(code.split("")[0])
);

/**
 * Helps us build the content of the class file
 */
const createClassFileContent = (
  code,
  name,
  className
) => `import { HttpError } from "./HttpError";

export class ${className}<ContextType> extends HttpError<ContextType> {
  public readonly name = "${className}";

  constructor(
    public readonly message: string = "${name}",
    public readonly context?: ContextType
  ) {
    super(${code}, message, context);
  }
}
`;

/**
 * Loop over the codes and generate TS classes for them
 */
errorCodes.forEach(([code, name]) => {
  const className = name.replace(/\W|Error$/g, "").concat("Error");
  fs.writeFile(
    `./src/errors/${className}.ts`,
    createClassFileContent(code, name, className)
  );
});
