import { Request, Response, NextFunction, RequestHandler } from 'express';

export const asyncHandler =
  <P = any, ResBody = any, ReqBody = any, ReqQuery = any>(fn: RequestHandler<P, ResBody, ReqBody, ReqQuery>) =>
  (req: Request<P, ResBody, ReqBody, ReqQuery>, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
