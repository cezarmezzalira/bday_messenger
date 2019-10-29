import 'dotenv/config';

import express from 'express';
import cron from 'node-cron';
import routes from './routes';
import MailService from './app/services/MailService';

import './database';

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
    this.exceptionHandler();
    this.scheduler();
  }

  middlewares() {
    // Indica para o Express que ele deve usar arquivos JSON
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }

  exceptionHandler() {
    this.server.use(async (err, req, res, next) => {
      return res.status(500).json({ error: `Internal Server Error: ${err}` });
    });
  }

  scheduler() {
    const second = '';
    const minute = '30';
    const hour = '*';
    const dayOfMonth = '*';
    const month = '*';
    const dayOfWeek = '*';

    const scheduleParams = `${second} ${minute} ${hour} ${dayOfMonth} ${month} ${dayOfWeek}`;

    cron.schedule(scheduleParams, () => {
      MailService.sendBDayEmails();
    });
  }
}

export default new App().server;
