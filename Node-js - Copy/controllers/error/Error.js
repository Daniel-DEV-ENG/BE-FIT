class BaseError extends Error {
    name = string;
    httpCode = HttpStatusCode;
    isOperational = boolean;

    constructor(name = string, httpCode = HttpStatusCode, description = string, isOperational = boolean) {
        super(description);
        Object.setPrototypeOf(this, new.target.prototype);

        this.name = name;
        this.httpCode = httpCode;
        this.isOperational = isOperational;

        Error.captureStackTrace(this);
    }
}

//free to extend the BaseError
class APIError extends BaseError {
    constructor(name, httpCode = HttpStatusCode.INTERNAL_SERVER, isOperational = true, description = 'internal server error') {
        super(name, httpCode, isOperational, description);
    }
}