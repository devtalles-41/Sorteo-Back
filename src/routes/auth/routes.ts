import { Router } from "express";
import { AuthController } from "../../controllers/auth/controller";
import passport from 'passport';

export class AuthRoutes{
    static get routes(): Router {
        const router = Router();
        const controller = new AuthController();

        router.get('/login',passport.authenticate('discord'), controller.loginDiscord);

        router.get('/login/redirect', controller.discordCallback);

        router.post('/logout',controller.registerUser);

        router.get('/test',(req,res)=>{
            res.json('test')
        });

        return router;
    }
}