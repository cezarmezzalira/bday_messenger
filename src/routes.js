import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';
import MultipleUsersController from './app/controllers/MultipleUsersController';
import UserController from './app/controllers/UserController';

const routes = new Router();
const upload = multer(multerConfig);

routes.post(
  '/users/multiple',
  upload.single('file'),
  MultipleUsersController.store
);
routes.get('/users/multiple', MultipleUsersController.index);

routes.post('/users', UserController.store);
routes.get('/users', UserController.index);
routes.get('/', (req, res) => {
  res.json({ ok: true });
});

module.exports = routes;
