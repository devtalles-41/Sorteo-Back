import {Request, Response} from 'express';

export class AuthController {

    constructor(){}

    registerUser = (req:Request,res: Response) => {
        res.json('Aqui se registra el usuario al ser el primer login');
    }

    loginUser = (req:Request,res: Response) =>{
        res.json('al comprobar que ya se ha logeado dentro de discord se dispara el login')
    }

    loginDiscord = (req:Request,res:Response)=>{
        console.log("login con discord");
        res.send(200);
    }

    discordCallback = (req:Request,res:Response)=>{
        console.log("Obteniendo data de la api de discord");
        console.log(req);
        res.send(200);
    }

}