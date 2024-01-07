

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
        this.router.get(['/get/:id', '/get'], async (req: Request, res: Response) => {
            try {
                const response = await this.StandService.get(req.params.id)
                res.send(response)

            } catch (err: any) {
                res.status(err.status || 500).render('error.ejs', { status: err.status || 500, msg: err.message || 'internal' })

            }
        })

        this.router.post('/admin/edit/:id/update', isLoging, upload.single('img'), async (req: Request, res: Response) => {
            try {
           
               
                await this.StandService.update(req.params.id, req.body)
          
                res.redirect('/stands/admin')

            } catch (err: any) {
                res.status(err.status || 500).render('error.ejs', { status: err.status || 500, msg: err.message || 'internal' })

            }
        })
        this.router.get('/admin/delete/:id', isLoging, async (req: Request, res: Response) => {
            try {
                await this.StandService.delete(req.params.id)
                res.redirect('/stands/admin')

            } catch (err: any) {
                res.status(err.status || 500).render('error.ejs', { status: err.status || 500, msg: err.message || 'internal' })

            }
        })

        this.router.get('/guide', async (req: Request, res: Response) => {
            const data = await this.StandService.get()

            res.render('index.ejs', { key: "guide", data, session: req.session.user })
        })


        this.router.get('/admin', isLoging, async (req: Request, res: Response) => {

            const data = await this.StandService.get()

            res.render('stands.ejs', { data, func: 'admin/create', obj: null, session: req.session.user })
        })
     
      
        this.router.get('/admin/edit/:id', isLoging, async (req: Request, res: Response) => {

            const [data, obj] = await Promise.all([this.StandService.get(), this.StandService.get(req.params.id)])

            res.render('stands.ejs', { data, func: `${req.params.id}/update`, obj, session: req.session.user })
        })
      
      
      
        this.router.post('/admin/create', isLoging, upload.single('img'), async (req: Request, res: Response) => {
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

