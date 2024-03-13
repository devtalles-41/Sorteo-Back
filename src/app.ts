import { Server } from './models/server';
import { AppRoutes } from './routes/routes';

const server = new Server({
    routes: AppRoutes.routes
});

server.listen();
