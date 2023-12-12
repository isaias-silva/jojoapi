import express, { NextFunction, Request, Response, Express } from 'express'
import { config } from 'dotenv'
import pino from 'pino'
import logger from './utils/logger'
import cors from 'cors'
import bodyParser from 'body-parser'
import session from 'express-session'
import { HttpError } from './utils/HttpError'
import pageController from './controllers/page.controller'
import extractDomain from './middlewares/extract.domain'
import authController from './controllers/auth.controller'
config()


export class App {
    private port: string | number
    private server?: Express

    constructor(port: string | number) {
        this.port = port
    }
    initServer() {
        this.server = express()
        this.defineConfigServer()
        this.defineMiddlewares()
        this.defineRoutes()
        this.treatingErrors()
        
        this.server.listen(this.port,()=>{
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
        this.server.use(pageController)
        this.server.use('/auth', authController)
    }

    private treatingErrors() {
        if (!this.server) {
            return
        }
        this.server.use((req: Request, res: Response, next: NextFunction) => {
            const error = new HttpError(404, 'not found')

            next(error);
        })

        this.server.use((erro: HttpError, req: Request, res: Response, next: NextFunction) => {
            logger.error(erro)
            return res.render('erro.ejs', { erro: erro.status, msg: erro })

        }
        )



    }
}

const port = process.env.PORT || 8080
const app = express()






