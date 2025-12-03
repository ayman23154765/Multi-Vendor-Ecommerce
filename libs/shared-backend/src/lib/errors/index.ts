import { AppError } from "./app-error";

export class NotFoundError extends AppError {
    constructor(message = "Resource Not Found!", statusCode = 404, details?: any, options?: ErrorOptions) {
        super(message, statusCode, details, options);
    }
} 

export class ValidationError extends AppError {
    constructor(message = "Validation Error!", statusCode = 400, details?: any, options?: ErrorOptions) {
        super(message, statusCode, details, options);
    }
}

export class UnauthorizedError extends AppError {
    constructor(message = "Unauthorized!", statusCode = 401, details?: any, options?: ErrorOptions) {
        super(message, statusCode, details, options);
    }
}

export class ForbiddenError extends AppError {
    constructor(message = "Forbidden!", statusCode = 403, details?: any, options?: ErrorOptions) {
        super(message, statusCode, details, options);
    }
}

export class BadRequestError extends AppError {
    constructor(message = "Bad Request!", statusCode = 400, details?: any, options?: ErrorOptions) {
        super(message, statusCode, details, options);
    }
}

export class MethodNotAllowedError extends AppError {
    constructor(message = "Method Not Allowed!", statusCode = 405, details?: any, options?: ErrorOptions) {
        super(message, statusCode, details, options);
    }
}

export class TooManyRequestsError extends AppError {
    constructor(message = "Too Many Requests!", statusCode = 429, details?: any, options?: ErrorOptions) {
        super(message, statusCode, details, options);
    }
}

export class InternalServerError extends AppError {
    constructor(message = "Internal Server Error!", statusCode = 500, details?: any, options?: ErrorOptions) {
        super(message, statusCode, details, options);
    }
}

export class SomethingWentWrongError extends AppError {
    constructor(message = "Something Went Wrong!", statusCode = 500, details?: any, options?: ErrorOptions) {
        super(message, statusCode, details, options);
    }
}

export class ServiceUnavailableError extends AppError {
    constructor(message = "Service Unavailable!", statusCode = 503, details?: any, options?: ErrorOptions) {
        super(message, statusCode, details, options);
    }
}

export class DatabaseError extends AppError {
    constructor(message = "Database Error!", statusCode = 500, details?: any, options?: ErrorOptions) {
        super(message, statusCode, details, options);
    }
}