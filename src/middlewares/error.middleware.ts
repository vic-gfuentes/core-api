import { Request, Response, NextFunction } from 'express';
import { ZodError } from 'zod'; // Import ZodError to handle validation errors
import { ErrorResponseContract } from '../contracts';
import { INTERNAL_SERVER_ERROR, OK, BAD_REQUEST } from '@src/utils/httpStatusCodes';

export function errorHandler(err: Error, _req: Request, res: Response<ErrorResponseContract>, _next: NextFunction) {
  if (err instanceof ZodError) {
    return res.status(BAD_REQUEST).json({
      message: 'Validation error',
      errors: err.errors,
    });
  }

  const statusCode = res.statusCode !== OK ? res.statusCode : INTERNAL_SERVER_ERROR;
  const sanitizedMessage = err.message.replace(/\s+/g, ' ').trim();
  const sanitizedStack = err.stack ? err.stack.replace(/\s+/g, ' ').trim() : '';

  res.status(statusCode).json({
    message: sanitizedMessage,
    stack: process.env.NODE_ENV === 'production' ? '🥞' : sanitizedStack,
  });
}
