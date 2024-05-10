import { Request, Response, NextFunction } from 'express';
import { ErrorResponseContract } from '../contracts';
import { INTERNAL_SERVER_ERROR, OK } from '@src/utils/httpStatusCodes';

export function errorHandler(err: Error, _req: Request, res: Response<ErrorResponseContract>, _next: NextFunction) {
  const statusCode = res.statusCode !== OK ? res.statusCode : INTERNAL_SERVER_ERROR;

  const sanitizedMessage = err.message.replace(/\s+/g, ' ').trim();
  const sanitizedStack = err.stack ? err.stack.replace(/\s+/g, ' ').trim() : '';

  res.status(statusCode).json({
    message: sanitizedMessage,
    stack: process.env.NODE_ENV === 'production' ? '🥞' : sanitizedStack,
  });
}
