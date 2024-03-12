import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import { envs } from '../config';
import { conectionDatabase } from '../db/config';

export class Server {
  private app: express.Application;
  private port: number;

  constructor() {
    this.app = express();
    this.port = envs.port;

    this.conectionDatabase();
    this.middlewares();
    this.routes();
  }

  async conectionDatabase() {
    await conectionDatabase();
  }

  middlewares() {
    this.app.use(
      cors({
        origin: '*', //TODO: Por ahora, pero luego cambiar
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE'
      })
    );

    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(morgan('dev'));
  }

  routes() {}

  listen() {
    const server = this.app.listen(this.port, () => {
      console.clear();
      console.log('Server is running on port', this.port);
    });

    server.on('error', (error) => {
      console.error('Error starting server:', error);
      process.exit(1);
    });
  }
}
