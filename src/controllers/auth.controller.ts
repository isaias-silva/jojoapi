import { Request, Response, Router } from "express";
import { Controller } from "../interfaces/interface.controller";
import { AuthService } from "../services/auth.services";
import { Iuser } from "../interfaces/interface.user";


export class AuthController implements Controller {
    path = 'auth'
    router: Router
    private authService: AuthService
    constructor() {
        this.authService = new AuthService()
        this.router = Router()

        this.defineRoutes()
    }

    defineRoutes() {
        this.router.post(['/', 'login'], async (req: Request, res: Response) => {
            const body: Iuser = req.body
            const session = await this.authService.loginInSession(body)

            req.session.user = session

            return { message: 'login is a sucess' }
        })

    }
}

