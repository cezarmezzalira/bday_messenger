import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';
import MultipleUsersController from './app/controllers/MultipleUsersController';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users/', upload.single('file'), MultipleUsersController.store);
routes.get('/users/', MultipleUsersController.index);
routes.get('/', (req, res) => {
  res.json({ ok: true });
});

module.exports = routes;
