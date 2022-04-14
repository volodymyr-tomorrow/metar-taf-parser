export abstract class ParseError extends Error {
  name = "ParseError";

  constructor(message?: string) {
    super(message);
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

export class InvalidWeatherStatementError extends ParseError {
  name = "InvalidWeatherStatementError";
  cause?: unknown;

  constructor(cause?: unknown) {
    super(
      typeof cause === "string"
        ? `Invalid weather string: ${cause}`
        : "Invalid weather string"
    );
    Object.setPrototypeOf(this, new.target.prototype);

    if (typeof cause !== "string") this.cause = cause;
  }
}

/**
 * Thrown when remark command marked as canParse, but couldn't parse when
 * executing (for example, an invalid CloudQuantity)
 */
export class RemarkExecutionError extends ParseError {
  name = "RemarkExecutionError";

  constructor(message: string) {
    super(message);
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

/**
 * Should never occur
 */
export class UnexpectedParseError extends ParseError {
  name = "UnexpectedParseError";

  constructor(message?: string) {
    super(message);
    Object.setPrototypeOf(this, new.target.prototype);
  }
}
