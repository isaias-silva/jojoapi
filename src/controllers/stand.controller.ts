

import { Router, Response, Request } from "express";
import { Controller } from "../interfaces/interface.controller";
import isLoging from "../middlewares/is.loging";
import upload from "../utils/upload";

export class StandController implements Controller {
    path = '/stands'
    router: Router;

    constructor() {
        this.router = Router();
        this.defineRoutes();
    }

    defineRoutes() {
        this.router.get('/guide', async (req: Request, res: Response) => {
            res.render('index.ejs', { key: "guide",data:[] })
        })
        this.router.get('/admin', async (req: Request, res: Response) => {
            res.render('stands.ejs', { data:[] , func:'create',obj:null})
        })
        
        this.router.post('/create',upload.single('img') ,async (req: Request, res: Response) => {
    
            console.log(req.body)
           res.send('ok')
        })
      
    }
}
