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

                res.render('admin.ejs',{data:[]})

            } catch (err: any) {

                res.status(err.status || 500).render('error.ejs', { status: err.status || 500, msg: err.message || 'internal' })
            }
        })

        this.router.post('/logout', (req: Request, res: Response) => {
            req.session.user = undefined
            res.status(200).json({ message: 'bye bye!' })
        })
    }
}

