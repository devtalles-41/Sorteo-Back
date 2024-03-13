import express, { Router } from 'express';
import cors from 'cors';
import morgan from 'morgan';

import { envs } from '../config';
import { conectionDatabase } from '../db/config';
import { AppRoutes } from '../routes/routes';

interface Options{
  port?: number;
  routes: Router;
}
export class Server {
  private app: express.Application;
  private readonly port: number;
  private readonly routes: Router;

  constructor( options: Options) {
    const{port = envs.port, routes} = options;
    this.app = express();
    this.port = port;

    this.conectionDatabase();
    this.middlewares();
    this.routes = routes;
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


  listen() {

    this.app.use(this.routes);
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
