import { Router, Response, Request } from "express";
import { Controller } from "../interfaces/interface.controller";

export class PagesController implements Controller {
    path = '/'
    router: Router;

    constructor() {
        this.router = Router();
        this.defineRoutes();
    }

    defineRoutes() {

        this.router.get(['/home', '/'], (req: Request, res: Response) => {

            res.render('index.ejs', { key: 'home', countStands: 0 })
        })

        this.router.get('/howtouse', (req: Request, res: Response) => {

            res.render('index.ejs', { key: "how", countStands: 0 })
        })

        this.router.get('/about', (req: Request, res: Response) => {
            res.render('index.ejs', { key: "about", countStands: 0 })
        })

        this.router.get('/hexagraph', (req: Request, res: Response) => {
            res.render('index.ejs', { key: "hex", countStands: 0 })
        })


        this.router.get('/login', (req: Request, res: Response) => {

            res.render('login-adm.ejs', { msg: '' })

        })

        this.router.get('/admin', (req, res) => {

            res.render('admin.ejs', { countStands: 0, data: {}, func: '/admin/create', obj: {} })

        })


        this.router.get('/edit/:id', async (req, res) => {

            res.render('admin.ejs', { countStands: 0, data: {}, func: `/admin/save/`, obj: {} })

        })


    }
}
