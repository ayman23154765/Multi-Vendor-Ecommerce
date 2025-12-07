import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/app-error";
import { SomethingWentWrongError } from "../errors";


export const ErrorMiddleware = (err: Error | AppError, req: Request, res: Response, next: NextFunction) => {
    if(err instanceof AppError) {
        
        console.log(`ErrorMiddlewar ~ Error: ${req.method} ${req.url} - ${err.message}`);

        return res.status(err.statusCode).json({
            status: err.statusCode,
            message: err.message,
            ...(err.details && { details: err.details }),
        });
    }
    
    console.log("ErrorMiddlewar ~ Unhandled Error:", err)

    const somthingww = new SomethingWentWrongError();
    return res.status(somthingww.statusCode).json({
        status: somthingww.statusCode,
        message: somthingww.message,
    });
}