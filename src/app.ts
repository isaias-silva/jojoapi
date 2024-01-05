import express, { NextFunction, Request, Response, Express } from 'express'
import { config } from 'dotenv'
import pino from 'pino'
import logger from './utils/logger'
import cors from 'cors'
import bodyParser from 'body-parser'
import session from 'express-session'
import { HttpError } from './utils/HttpError'

import extractDomain from './middlewares/extract.domain'
import { User } from './models/user.model'
import { Controller } from './interfaces/interface.controller'
import { AuthController } from './controllers/auth.controller'
import { PagesController } from './controllers/page.controller'
import { UserController } from './controllers/user.controller'
import listEndpoints from 'express-list-endpoints'

config()

declare module 'express-session' {
    interface SessionData {
        user: { name: string, email: string, id:string};
    }
}


export class App {
    private port: string | number
    private server?: Express
    private controllers = [AuthController, PagesController, UserController]

    constructor(port: string | number) {
        this.port = port
    }
    initServer() {
        this.server = express()
        this.defineConfigServer()
        this.defineMiddlewares()
        this.defineRoutes()
        this.treatingErrors()

        this.server.listen(this.port, () => {

            this.controllers.map(Controller=>{
                const controller:Controller=new Controller();
                
                if (controller.afterCreate) {
                    controller.afterCreate()
                }
            })
            logger.info(`server running in port ${this.port}`)
        })
    }
    private defineConfigServer() {
        if (!this.server) {
            return
        }
        this.server.use(cors())
        this.server.set('view engine', 'ejs')

        this.server.use(bodyParser.urlencoded({
            extended: false

        }));
        this.server.use(bodyParser.json())

        this.server.use(session({ secret: process.env.SECRET || 'jojo', resave: true, saveUninitialized: true }))

        this.server.use(express.static('public'));


    }

    private defineMiddlewares() {
        if (!this.server) {
            return
        }
        this.server.use([extractDomain])
    }
    private defineRoutes() {
        if (!this.server) {
            return
        }
        this.controllers.forEach((Controller) => {
            const controller: Controller = new Controller()
        
            this.server?.use(controller.path, controller.router)
            logger.info(`controler => ${controller.path}`)
        })


        console.table(listEndpoints(this.server));
    }

    private treatingErrors() {
        if (!this.server) {
            return
        }

        this.server.use((error:HttpError,req: Request, res: Response, next: NextFunction) => {
           
            if (error) {
               
              logger.info(error)
            return res.render('error.ejs', { status: error.status, msg:error.message })

            }
         
                next()
            
        })
        this.server.use((req: Request, res: Response, next: NextFunction) => {

            return res.render('error.ejs', { status: 404, msg: 'not found' })

        }
        )



    }
}







