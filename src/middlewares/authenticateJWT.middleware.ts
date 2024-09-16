import { User } from '@src/api/users/user.schema';
import { UNAUTHORIZED } from '@src/utils/httpStatusCodes';
import { Request, Response, NextFunction } from 'express';
import passport from 'passport';

export const authenticateJWT = (req: Request, res: Response, next: NextFunction) => {
  passport.authenticate('jwt', { session: false }, (err: any, user: User) => {
    if (err) return next(err);
    if (!user) return res.status(UNAUTHORIZED).json({ message: 'Unauthorized' });
    req.user = user.id;

    next();
  })(req, res, next);
};
