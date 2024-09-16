import { Request } from 'express';
import { ApiResponse } from '@contracts/api-response.contract';
import { OK, UNAUTHORIZED } from '@src/utils/httpStatusCodes';
import { asyncHandler } from '@src/middlewares';
import jwt from 'jsonwebtoken';
import prisma from '@lib/db';
import bcrypt from 'bcrypt';
import ApiError from '@src/middlewares/error.middleware';
import { AuthSchema } from './auth.schema';

export class AuthController {
  constructor() {}

  login = asyncHandler(async (req: Request, res: ApiResponse) => {
    const parsedData = AuthSchema.parse(req.body);
    const { username, password } = parsedData;

    const user = await prisma.user.findUnique({ where: { username } });
    if (!user) {
      throw new ApiError('Invalid credentials', UNAUTHORIZED);
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new ApiError('Invalid credentials', UNAUTHORIZED);
    }

    // Generate JWT token
    const payload = { id: user.id };
    const token = jwt.sign(payload, process.env.JWT_SECRET || 'shh-its-a-secret', { expiresIn: '1h' });

    return res.status(OK).json({
      success: true,
      message: 'Authenticated',
      data: token,
    });
  });
}
