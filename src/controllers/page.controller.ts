import { Router, Response, Request } from "express";
import { Controller } from "../interfaces/interface.controller";
import isLoging from "../middlewares/is.loging";
import isNotLoging from "../middlewares/is.not.loging";

export class PagesController implements Controller {
    path = ''
    router: Router;

    constructor() {
        this.router = Router();
        this.defineRoutes();
    }

    defineRoutes() {

        this.router.get(['/home', '/'], (req: Request, res: Response) => {
            const { session } = req
            const { user } = session
            res.render('index.ejs', { key: 'home', session: user })
        })

        this.router.get('/howtouse', (req: Request, res: Response) => {
            const { session } = req
            const { user } = session
            res.render('index.ejs', { key: "how", session: user })
        })

        this.router.get('/about', (req: Request, res: Response) => {
            const { session } = req
            const { user } = session
            res.render('index.ejs', { key: "about", session: user })
        })

        this.router.get('/hexagraph', (req: Request, res: Response) => {
            const { session } = req
            const { user } = session
            res.render('index.ejs', { key: "hex", session: user })
        })



        this.router.get('/login',isNotLoging ,(req: Request, res: Response) => {

            res.render('login-adm.ejs', { msg: '' })

        })

        this.router.get('/admin', isLoging, (req, res) => {

            res.render('admin.ejs', { session: req.session.user })

        })


    }
}
