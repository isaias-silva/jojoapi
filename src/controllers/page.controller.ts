import { Router, Response, Request } from "express";
import { Controller } from "../interfaces/interface.controller";
import isLoging from "../middlewares/is.loging";

export class PagesController implements Controller {
    path = ''
    router: Router;

    constructor() {
        this.router = Router();
        this.defineRoutes();
    }

    defineRoutes() {

        this.router.get(['/home', '/'], (req: Request, res: Response) => {

            res.render('index.ejs', { key: 'home' })
        })

        this.router.get('/howtouse', (req: Request, res: Response) => {

            res.render('index.ejs', { key: "how" })
        })

        this.router.get('/about', (req: Request, res: Response) => {
            res.render('index.ejs', { key: "about" })
        })

        this.router.get('/hexagraph', (req: Request, res: Response) => {
            res.render('index.ejs', { key: "hex" })
        })

    

        this.router.get('/login', (req: Request, res: Response) => {

            res.render('login-adm.ejs', { msg: '' })

        })

        this.router.get('/admin',isLoging ,(req, res) => {

            res.render('admin.ejs', { session: req.session.user })

        })


    }
}
