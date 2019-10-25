import { Router } from 'express';

/* CONTROLLERS */

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

/* MIDDLEWARERS */

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

/* ROUTES */

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.put('/users', UserController.update);

export default routes;
