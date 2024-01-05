import { Request, Response, Router } from "express";
import { Controller } from "../interfaces/interface.controller";
import { UserService } from "../services/user.service";

export class UserController implements Controller {
    path: string = '/user';
    router: Router = Router();
    private userServices: UserService

    constructor() {
        this.router = Router();
        this.defineRoutes();
        this.userServices = new UserService()
    }
    defineRoutes = () => {
        this.router.get('/sessionInfo',async (req: Request, res:Response) => {

            res.json({sessionInfo:req.session.user})
        })
      

    }
    afterCreate = async () => {
        await this.userServices.generateUser()
    }

}