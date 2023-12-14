import { Router } from "express";
import { Controller } from "../interfaces/interface.controller";
import { UserService } from "../services/user.service";

export class UserController implements Controller {
    path: string = 'user';
    router: Router = Router();
    private userServices: UserService

    constructor() {
        this.router = Router();
        this.defineRoutes();
        this.userServices = new UserService()
    }
    defineRoutes = () => {


    }
    afterCreate = () => {
        this.userServices.generateUser()
    }

}