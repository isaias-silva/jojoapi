import { Request, Response, Router } from "express";
import { Controller } from "../interfaces/interface.controller";
import { AuthService } from "../services/auth.services";
import { Iuser } from "../interfaces/interface.user";
import { HttpError } from "../utils/HttpError";


export class AuthController implements Controller {
    path = '/auth'
    router: Router
    private authService: AuthService
    constructor() {
        this.authService = new AuthService()
        this.router = Router()

        this.defineRoutes()
    }

    defineRoutes() {

        this.router.post('/', async (req: Request, res: Response) => {
            const body: Iuser = req.body
            try {
                const session = await this.authService.loginInSession(body)

                req.session.user = session

                res.send({ message: 'login is a sucess' })

            } catch (err: any) {

                res.status(err.status || 500).json({ message: err.message || 'internal' })
            }
        })

    }
}

