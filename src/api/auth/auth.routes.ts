import { Router } from 'express';
import { AuthController } from './auth.controller';

const router = Router();

const userController = new AuthController();

router.post('/login', userController.login);

export default router;
