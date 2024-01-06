import { Response, Request, NextFunction } from "express"
import logger from "../utils/logger"
import { HttpError } from "../utils/HttpError"

export default (req: Request, res: Response, next: NextFunction) => {

    const {user}=req.session
    if(!user){
        next()
    }else{
        res.redirect('/admin')
    }
    
}