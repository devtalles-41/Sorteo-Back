import { Router } from "express";

export class AuthRoutes{
    static get routes(): Router {
        const router = Router();

        router.post('/login',(req,res)=>{
            res.json('Login')
        });

        router.post('/logout',(req,res)=>{
            res.json('Logout')
        });

        router.get('/test',(req,res)=>{
            res.json('test')
        });

        return router;
    }
}