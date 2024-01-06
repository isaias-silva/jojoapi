

import { Router, Response, Request } from "express";
import { Controller } from "../interfaces/interface.controller";
import isLoging from "../middlewares/is.loging";
import upload from "../utils/upload";
import { StandService } from "../services/stands.service";

export class StandController implements Controller {
    path = '/stands'
    router: Router;
    private StandService: StandService

    constructor() {
        this.router = Router();
        this.defineRoutes();
        this.StandService = new StandService()
    }

    defineRoutes() {
        this.router.get('/guide', async (req: Request, res: Response) => {
            const data=await this.StandService.get()
          
            res.render('index.ejs', { key: "guide", data, session: req.session.user })
        })
        this.router.get('/admin', isLoging, async (req: Request, res: Response) => {
           
            const data=await this.StandService.get()

            res.render('stands.ejs', { data, func: 'create', obj: null, session: req.session.user })
        })


        this.router.post('/create', isLoging, upload.single('img'), async (req: Request, res: Response) => {
            try {
                await this.StandService.create(req.body)

                res.redirect('/stands/admin')
            } catch (err: any) {
                res.status(err.status || 500).render('error.ejs', { status: err.status || 500, msg: err.message || 'internal' })

            }
        }
        )

    }

}

