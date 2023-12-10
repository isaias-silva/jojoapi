import express, { NextFunction, Request, Response } from 'express'
import { config } from 'dotenv'
import pino from 'pino'
import logger from './utils/logger'
import cors from 'cors'
import bodyParser from 'body-parser'
import session from 'express-session'
import { HttpError } from './utils/HttpError'
import pageController from './controllers/page.controller'
config()

const port = process.env.PORT || 8080
const app = express()

app.use(cors())
app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({
    extended: false


}));
app.use(bodyParser.json())

app.use(session({ secret: process.env.SECRET || 'jojo', resave: true, saveUninitialized: true }))

app.use(express.static('public'));


app.use(pageController)

app.use((req: Request, res: Response, next: NextFunction) => {
    const erro = new HttpError(404, 'not found')

    next(erro);
})
app.use((erro: HttpError, req: Request, res: Response, next: NextFunction) => {

    return res.render('erro.ejs', { erro: erro.status, msg: erro })

}
)
app.listen(port, () => {
    logger.info(`server running in ${port}`, 'api')
})


