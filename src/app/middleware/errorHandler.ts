import { Request, Response, NextFunction } from 'express'
import { ZodSchema } from 'zod'
const validateRequest = (schema: ZodSchema<any>) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body)
    if (!result.success) {
      return res.status(400).json({
        message: 'Validation failed',
        success: false,
        error: result.error.format(), // Detailed Zod error response
      })
    }
    next()
  }
}

// interface ErrorResponse {
//   message: string;
//   success: false;
//   error: string | object;
//   stack?: string;
// }

// const errorHandle = (
//   err: any,
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   let statusCode = err.status || 500;
//   let errorResponse: ErrorResponse = {
//     message: err.message || "Internal Server Error",
//     success: false,
//     error: err.name || "UnknownError",
//   };

//   // Handle Validation Errors (Zod)
//   if (err instanceof ZodError) {
//     statusCode = 400;
//     errorResponse.message = "Validation failed";
//     errorResponse.error = err.format(); // Zod provides structured error messages
//   }

//   // Include stack trace only in development mode
//   if (process.env.NODE_ENV === "development") {
//     errorResponse.stack = err.stack;
//   }

//   res.status(statusCode).json(errorResponse);
// };

export const errorHandler = validateRequest
