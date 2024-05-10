import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import * as middlewares from './middlewares';

// route imports
import userRoutes from './api/users/users.routes';

const app = express();

app.use(helmet());
app.use(express.json());
app.use(cors());

// routes
app.use('/api/users', userRoutes);

// middlewares
app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

export default app;
