import { Router } from 'express';
import { UsersController } from './users.controller';

const router = Router();

const userController = new UsersController();

router
  .get('/', userController.index)
  .post('/', userController.create)
  .get('/:id', userController.show)
  .patch('/:id', userController.update)
  .delete('/:id', userController.delete);

export default router;
