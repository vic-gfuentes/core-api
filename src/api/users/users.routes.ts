import { Router } from 'express';
import { UsersController } from './users.controller';
import { authenticateJWT } from '@src/middlewares/authenticateJWT.middleware';

const router = Router();

const userController = new UsersController();

router
  .get('/', authenticateJWT, userController.index)
  .post('/', authenticateJWT, userController.create)
  .get('/:id', authenticateJWT, userController.show)
  .patch('/:id', authenticateJWT, userController.update)
  .delete('/:id', authenticateJWT, userController.delete);

export default router;
