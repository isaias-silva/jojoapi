import express, { Request, Response } from 'express'
import { config } from 'dotenv'
import pino from 'pino'
import logger from './utils/logger'
import cors from 'cors'
import bodyParser from 'body-parser'
import session from 'express-session'
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


app.get('/',(req:Request,res:Response)=>{

    res.render('index.ejs',{key:'home',acess:1,linkapi:2})
})



app.listen(port, () => {
    logger.info(`server running in ${port}`, 'api')
})


