import request from 'supertest';
import { NextFunction, Request, Response } from 'express';
import { app } from '@tests/shared/index';
import { OK } from '@src/utils/httpStatusCodes';
import { messages } from '@src/utils/wordings';

jest.mock('passport', () => ({
  use: jest.fn(),
  authenticate: jest.fn(() => (_req: Request, _res: Response, next: NextFunction) => next()),
  initialize: jest.fn(() => (_req: Request, _res: Response, next: NextFunction) => next()),
}));

describe('USERS Controller', () => {
  describe('GET /api/users/', () => {
    it('should fetch all users', async () => {
      const res = await request(app).get('/api/users/');

      expect(res.statusCode).toBe(OK);
      expect(res.body.success).toBe(true);
      expect(res.body.message).toBe(messages.index);
    });
  });
});
