import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import { initializePassport } from '@config/passport';
import * as middlewares from './middlewares';

// route imports
import authRoutes from './api/auth/auth.routes';
import userRoutes from './api/users/users.routes';

const app = express();

app.use(helmet());
app.use(express.json());
app.use(cors());
app.use(initializePassport());

// routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

// middlewares
app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

export default app;
