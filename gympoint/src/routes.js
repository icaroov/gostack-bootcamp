import { Router } from 'express';

/* CONTROLLERS */

import UserController from './app/controllers/UserController';
import StudentController from './app/controllers/StudentController';
import SessionController from './app/controllers/SessionController';

/* MIDDLEWARES */

import authMiddleware from './app/middlewares/auth';

/* ROUTES */

const routes = new Router();

routes.post('/users', UserController.store);

routes.post('/sessions', SessionController.store);

routes.post('/students', authMiddleware, StudentController.store);
routes.put('/students/:id', authMiddleware, StudentController.update);

export default routes;
