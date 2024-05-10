import request from 'supertest';
import { app } from '@tests/shared/index';
import { OK } from '@src/utils/httpStatusCodes';
import { messages } from '@src/utils/wordings';

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
